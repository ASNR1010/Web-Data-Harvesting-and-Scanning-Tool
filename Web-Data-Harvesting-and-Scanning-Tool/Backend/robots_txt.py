import urllib.request
import io

def get_robots_txt(url):  
    if url.endswith('/'):
        path = url
    else:
        path = url + '/'
    
    try:
        # Adding User-Agent to prevent 403 Forbidden errors
        req = urllib.request.Request(path + "robots.txt", headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = io.TextIOWrapper(response, encoding='utf-8')
            return data.read()
    except Exception as e:
        return f"Could not retrieve robots.txt: {str(e)}"
