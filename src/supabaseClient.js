import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eqjqotinlcpepcitpcps.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxanFvdGlubGNwZXBjaXRwY3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNDMxMDEsImV4cCI6MjA5NjgxOTEwMX0.wsBl8KIcu6iJz-BKyUxkqDkn18-hqO6NV1606k5YJP8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
