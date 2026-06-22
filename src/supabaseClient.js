import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 로컬 테스트: .env 파일에서 위 값을 바꾸면 됨
export const supabase = createClient(supabaseUrl, supabaseKey)
