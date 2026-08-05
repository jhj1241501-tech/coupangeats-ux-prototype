-- keepalive: 무활동 자동 일시정지를 막기 위한 하트비트 테이블
-- favorites(실사용 데이터)를 건드리지 않고 쓰기 활동만 발생시키는 용도.
-- 항상 id=1 한 행만 존재하며, GitHub Actions가 pinged_at을 갱신한다.
create table if not exists public.keepalive (
  id smallint primary key,
  pinged_at timestamptz not null default now()
);

insert into public.keepalive (id, pinged_at)
values (1, now())
on conflict (id) do nothing;

-- 보안 잠금(RLS) 켜기
alter table public.keepalive enable row level security;

-- anon 은 이 한 행을 읽고 갱신만 가능. 추가/삭제는 불가.
drop policy if exists "keepalive_read_anon" on public.keepalive;
create policy "keepalive_read_anon"
  on public.keepalive for select
  to anon
  using (true);

drop policy if exists "keepalive_update_anon" on public.keepalive;
create policy "keepalive_update_anon"
  on public.keepalive for update
  to anon
  using (id = 1) with check (id = 1);

-- 권한 부여 (insert/delete 는 주지 않음)
grant select, update on table public.keepalive to anon;
