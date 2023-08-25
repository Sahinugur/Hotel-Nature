import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://igbhsojwaifoskyoyhry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnYmhzb2p3YWlmb3NreW95aHJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MTM4NTUsImV4cCI6MjAwODE4OTg1NX0.xhXo2YdQQyHjrQQHRhiIyvk8Zyd6Btq9RZi6Q-R3OUI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
