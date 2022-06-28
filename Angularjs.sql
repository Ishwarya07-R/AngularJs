create table tblStudent
(
ID int primary key identity,
Name nvarchar(50),Gender nvarchar(10),City nvarchar(20))
GO
Insert into tblStudent values ('Ishu', 'Female', 'Chennai')
Insert into tblStudent values ('Sasi', 'Male', 'London')
Insert into tblStudent values ('Kavi', 'Female', 'Newyork')
Insert into tblStudent values ('subi', 'Female', 'Sydney')
GO

SELECT * FROM tblStudent
select COALESCE(GENDER,'GrandTotal')As Gender, count (*) as Total 
from tblStudent
group by ROLLUP (GENDER)

