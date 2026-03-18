# Web-Data-Harvesting-and-Scanning-Tool

A simple, multi-threaded web crawler written in Python. This tool crawls websites and collects all internal links within the same domain.

## Features

- Multi-threaded crawling for faster performance
- Domain-restricted crawling (stays within the same website)
- Saves crawled URLs to files for analysis
- Command-line interface for easy use

## Installation

1. Clone or download this repository.
2. Ensure you have Python 3 installed.
3. No additional dependencies required (uses Python standard library).

## Usage

Run the crawler from the command line:

```bash
python3 main.py
```

The program will prompt you for:
- Project name: A name for your crawl session (creates a folder with this name)
- Homepage URL: The starting URL to crawl (e.g., https://example.com)

The crawler will:
- Create a project directory
- Start crawling from the homepage
- Collect all internal links
- Save progress to `queue.txt` and `crawled.txt`

## How it Works

- Uses multiple threads to crawl pages concurrently
- Parses HTML to extract links
- Filters links to stay within the same domain
- Avoids revisiting already crawled pages

## Notes

- Respect website terms of service and robots.txt
- Some sites may block or rate-limit crawlers
- For large sites, crawling may take significant time and resources

## License

This project is open source. Feel free to modify and use as needed.


----------------------------------------------------------------------------
# Web Crawler System

A full-stack application designed to crawl and extract links from a given URL. The system features a modern **Angular** frontend and a high-performance **FastAPI** backend logic.

## 🏗️ Architecture

The system is built with a decoupled architecture to ensure scalability and clear separation of concerns.

1. **Angular UI**: The frontend interface where users interact with the system.
2. **HTTP API**: The communication bridge between the frontend and backend.
3. **FastAPI Backend**: Processes incoming requests and triggers the crawling logic.
4. **Python Crawler**: The core engine that fetches HTML and parses links.
5. **Data Flow**: Extracted links are returned via the API and dynamically rendered in the UI.

## 🚀 User Flow

1. **Input**: User enters a target URL into the input field.
2. **Action**: User clicks the **"Start Crawl"** button.
3. **Backend Processing**: The FastAPI server receives the URL and executes the Python crawler.
4. **Data Return**: Discovered links are structured and sent back to the client.
5. **Display**: Angular updates the view to list all crawled links.

## 🛠️ Tech Stack

- **Frontend**: Angular, TypeScript, HTML/CSS
- **Backend**: Python, FastAPI, Uvicorn
- **Parsing**: BeautifulSoup4 / Scrapy
- **Client**: Angular HttpClient

## 🏁 Getting Started

### 1. Backend Setup
Navigate to the backend directory and install dependencies:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install fastapi uvicorn beautifulsoup4 requests
