import { createClient } from "@supabase/supabase-js";

// SuperCool managed database (public url + anon key).
const url = "https://prjb47de56c1303438dba5f.databasepad.com";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhmYzYzOGFkLTQxYTAtNDhkZi04YmFjLWFmODQxM2YxNmI1MiJ9.eyJwcm9qZWN0SWQiOiJwcmpiNDdkZTU2YzEzMDM0MzhkYmE1ZiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzg1NDM0Nzk0LCJleHAiOjIxMDA3OTQ3OTQsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.JtIzoDpk5QqujFhEZ2wcE6GJ9Ktjl9cuNymo9xPjqnY";

export const db = createClient(url, anonKey);
export default db;
