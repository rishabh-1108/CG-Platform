import urllib.parse
from pymongo import MongoClient

# Type your real password inside the quotes. The urllib will fix any special characters.
password = urllib.parse.quote_plus("Rishabh11082005") 

uri = f"mongodb+srv://rishirishabh48_db_user:{password}@cluster0.qgtyvde.mongodb.net/?retryWrites=true&w=majority"

# Force TLS and bypass all certificate blocks
client = MongoClient(uri, tls=True, tlsAllowInvalidCertificates=True)

client.admin.command('ping')
print("Successfully connected!")