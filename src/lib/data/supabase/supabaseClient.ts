import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

export const supabase = createClient<Database>(
	'https://fawflkpsjpmmswttflma.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhd2Zsa3BzanBtbXN3dHRmbG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NTc1NzksImV4cCI6MjAzODUzMzU3OX0.rI60Y5-Aqqnlmml1T3gVkt8tiLcWDcOlfLs93nl33FQ'
);
