import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Subject, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-crawler',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crawler.html',
  styleUrls: ['./crawler.scss'],
})
export class Crawler implements OnDestroy {
  url = "";
  loading = false;
  links: string[] = [];
  queueCount = 0;
  crawledCount = 0;
  successRate = 0;

  intel = {
    ip: 'Awaiting start...',
    nmap: 'Awaiting start...',
    whois: 'Awaiting start...',
    robots: 'Awaiting start...'
  };

  private stop$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    this.stopCrawl();
  }

  startCrawl() {
    this.loading = true;
    this.links = []; // Clear old results
    this.stop$ = new Subject<void>(); // Reset stop signal
    
    this.http.post("http://localhost:8000/crawl", { url: this.url })
      .subscribe({
        next: () => {
          this.beginPolling();
        },
        error: err => {
          console.error('Crawl error:', err);
          this.loading = false;
        }
      });
  }

  beginPolling() {
    timer(0, 2000).pipe(
      takeUntil(this.stop$),
      switchMap(() => this.http.get<any>("http://localhost:8000/status"))
    ).subscribe({
      next: res => {
        this.links = res.links || [];
        this.queueCount = res.queue_count || 0;
        this.crawledCount = res.crawled_count || 0;
        this.successRate = res.success_rate || 0;
        this.intel = res.intel || this.intel;
      },
      error: err => console.error("Polling error:", err)
    });
  }

  stopCrawl() {
    this.stop$.next();
    this.stop$.complete();
    this.loading = false;
  }

  exportToCSV() {
    if (!this.links || this.links.length === 0) return;
    const content = this.links.join('\r\n');
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "discovery_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}