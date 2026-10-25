"""
राजस्थान शिक्षक व कर्मचारी DA एरियर एवं बोनस कैलकुलेटर
Desktop Launcher (100% Offline)
"""

import os
import sys
import webbrowser
import threading
from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = 8520

def start_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer(('127.0.0.1', PORT), SimpleHTTPRequestHandler)
    print(f"DA Arrear Calculator running at: http://127.0.0.1:{PORT}")
    server.serve_forever()

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(base_dir)

    # Check if webview is installed for native window
    try:
        import webview
        # Start server in background thread
        t = threading.Thread(target=start_server, daemon=True)
        t.start()
        webview.create_window(
            'राजस्थान शिक्षक व कर्मचारी DA एरियर व बोनस कैलकुलेटर',
            f'http://127.0.0.1:{PORT}/index.html',
            width=1240,
            height=850,
            resizable=True
        )
        webview.start()
    except Exception:
        # Fallback to local default web browser
        t = threading.Thread(target=start_server, daemon=True)
        t.start()
        webbrowser.open(f'http://127.0.0.1:{PORT}/index.html')
        print("खुल गया! ऐप को बंद करने के लिए यह विंडो बंद कर दें।")
        t.join()

if __name__ == '__main__':
    main()
