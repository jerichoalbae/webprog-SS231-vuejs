import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://skiepwpylrbjtpphdnyf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNraWVwd3B5bHJianRwcGhkbnlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTQ2ODUsImV4cCI6MjA1MzgzMDY4NX0.Y1zplo4mtnXfgpcBBCJZlxhKs6Dtn6QcFLUWTNvbyQk')