
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xrwhuitkkelerbhtpqpb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyd2h1aXRra2VsZXJiaHRwcXBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMDM4MjMsImV4cCI6MjA2Mzg3OTgyM30.-2gPyItNhHXqceT2ifxeuvdDBCLkh_mwDHTxpplhTWQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
