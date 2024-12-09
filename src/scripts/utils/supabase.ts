import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = "https://xiafbcjgvafwpljbbldr.supabase.co"; // استبدل بـ URL الخاص بمشروعك
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpYWZiY2pndmFmd3BsamJibGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MjEzNTIsImV4cCI6MjA0ODk5NzM1Mn0.w8PbjOHhO9jzZ6AySLFoPk3QYZeFvijtIK3B-PksVs4"; // استخدم مفتاح المشروع
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);