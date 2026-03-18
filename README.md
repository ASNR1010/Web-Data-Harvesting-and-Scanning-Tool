# Web-Data-Harvesting-and-Scanning-Tool

A full-stack application designed to crawl and extract links from a given URL and automated site analysis. The system features a modern **Angular** frontend and a high-performance **FastAPI** backend logic.
<img width="1916" height="563" alt="image" src="https://github.com/user-attachments/assets/8a4950fb-572e-4ca7-8bc9-7b5dc5b8b453" />
<img width="1876" height="1014" alt="image" src="https://github.com/user-attachments/assets/2226ae66-61a1-4b0c-b4bc-a50a416a24db" />
<img width="1877" height="1068" alt="image" src="https://github.com/user-attachments/assets/5a755ca8-8af8-4496-a053-949bee1668d6" />
<img width="1858" height="751" alt="image" src="https://github.com/user-attachments/assets/a58a49aa-634d-4c78-8bf9-b2c272c3838b" />


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
- **Client**: Angular HttpClient

## 🏁 Getting Started

### 1. Backend Setup
Navigate to the backend directory and install dependencies:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install fastapi uvicorn beautifulsoup4 requests
uvicorn api:app --reload
```

### 2. Frontend Setup
Install node and angular CLI:

```bash
cd Frontend
npm start
```
