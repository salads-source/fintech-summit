// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sobiuafehspttsrzuknx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvYml1YWZlaHNwdHRzcnp1a254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNTc4ODAsImV4cCI6MjAzOTYzMzg4MH0.LMhqUE43hE6ZE6TT01FsrL-zlaW0-Zj061e0syj0SGs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);