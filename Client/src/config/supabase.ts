import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types';

const supabaseUrl = 'https://nkmaepiuveyogvqsdsrc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbWFlcGl1dmV5b2d2cXNkc3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MTAxMzcsImV4cCI6MjAwNjk4NjEzN30.uTO62bxjoXWBm3DnQlJ1bC-rJUOxHK-oUvqv9Pcb-fY';

const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

export default supabase;
