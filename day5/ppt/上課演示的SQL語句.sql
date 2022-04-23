-- 通過 * 把 users 表中所有的數據查詢出來
-- select * from users

-- 從 users 表中把 username 和 password 對應的數據查詢出來
-- select username, password from users

-- 向 users 表中，插入新數據，username 的值為 tony stark password 的值為 098123
-- insert into users (username, password)values('tony stark', '098123')
-- select * from users

-- 將 id 為 4 的用戶密碼，更新成 888888
-- update users set password='888888' where id=4
-- select * from users

-- 更新 id 為 2 的用戶，把用戶密碼更新為 admin123 同時，把用戶的狀態更新為 1
-- update users set password='admin123', status=1 where id=2
-- select * from users

-- 從 users 表中，刪除 id 為 4 的用戶
-- delete from users where id=4
-- select * from users

-- 演示 where 子句的使用
-- select * from users where status = 1
-- select * from users where id >= 2
-- select * from users where username <> 'ls'
-- select * from users where username != 'ls'

-- 使用 AND 來顯示所有狀態為 0，且 id 小於 3 的用戶
-- select * from users where status = 0 AND id < 3

-- 使用 OR 來顯示所有狀態為 1，或者 username 為 zs 的用戶
-- select * from users where status = 1 OR username = 'zs'

-- 注意！如下兩條 SQL 語句是等價的，
-- 因為 ORDER BY 默認進行升序排序
-- 其中，ASC 關鍵字代表升序排序
-- select * from users order by status
-- select * from users order by status asc

-- 注意！DESC 代表將序排序, asc 代表升序排序（默認情況下，就是升序排序）
 -- select * from users order by id desc
 
 -- 對 users 表中數據，先按照 status 進行降序排序，再按照 username 字母的順序，進行升序的排序 - 多重排序
 -- select * from users order by status desc, username asc

-- 使用 count(*) 來統計 users表中，狀態為 0 用戶的總數量
-- select count(*) from users where status=0

-- 使用 as關鍵字 為列設置別名
-- select count(*) as total from users where status = 0
select username as uname, password as upwd   from users