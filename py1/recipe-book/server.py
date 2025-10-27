import http.server
import socketserver
import json
import os

PORT = 8000

class RecipeHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve the main HTML file
        if self.path == '/':
            self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)
    
    def do_POST(self):
        # Handle adding new recipes via POST request
        if self.path == '/api/recipes':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            new_recipe = json.loads(post_data.decode('utf-8'))
            
            # In a real application, you would save to a database
            # For this demo, we'll just return a success message
            response = {
                'status': 'success',
                'message': f'Recipe "{new_recipe["name"]}" added successfully!'
            }
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

# Change to the directory where the files are located
web_dir = os.path.join(os.path.dirname(__file__))
os.chdir(web_dir)

# Start the server
with socketserver.TCPServer(("", PORT), RecipeHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}")
    httpd.serve_forever()