import { Snippet, Category } from './types';

export const categories: Category[] = [
  { id: 'data-loading', name: 'Data Loading', icon: 'Download' },
  { id: 'data-inspection', name: 'Data Inspection', icon: 'Eye' },
  { id: 'data-cleaning', name: 'Data Cleaning', icon: 'Sparkles' },
  { id: 'filtering-selection', name: 'Filtering & Selection', icon: 'Filter' },
  { id: 'groupby-aggregation', name: 'GroupBy & Aggregation', icon: 'Layers' },
  { id: 'merging-joining', name: 'Merging & Joining', icon: 'Merge' },
  { id: 'visualization', name: 'Visualization', icon: 'BarChart3' },
  { id: 'sql-basics', name: 'SQL Cheat Sheet', icon: 'Database' },
];

export const snippets: Snippet[] = [
  {
    id: '1',
    title: 'Read CSV File',
    description: 'Load data from a CSV file into a DataFrame',
    code: `import pandas as pd

df = pd.read_csv('filename.csv')`,
    category: 'data-loading',
  },
  {
    id: '2',
    title: 'Read Excel File',
    description: 'Load data from an Excel file',
    code: `df = pd.read_excel('filename.xlsx', sheet_name='Sheet1')`,
    category: 'data-loading',
  },
  {
    id: '3',
    title: 'Read JSON File',
    description: 'Load data from a JSON file',
    code: `df = pd.read_json('filename.json')`,
    category: 'data-loading',
  },
  {
    id: '4',
    title: 'Create DataFrame from Dictionary',
    description: 'Create a DataFrame from a Python dictionary',
    code: `data = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data)`,
    category: 'data-loading',
  },
  {
    id: '5',
    title: 'Display First Rows',
    description: 'View the first n rows of the DataFrame (default 5)',
    code: `df.head()
df.head(10)  # First 10 rows`,
    category: 'data-inspection',
  },
  {
    id: '6',
    title: 'Display Last Rows',
    description: 'View the last n rows of the DataFrame',
    code: `df.tail()
df.tail(10)  # Last 10 rows`,
    category: 'data-inspection',
  },
  {
    id: '7',
    title: 'DataFrame Info',
    description: 'Get concise summary of DataFrame including dtypes and memory usage',
    code: `df.info()`,
    category: 'data-inspection',
  },
  {
    id: '8',
    title: 'Statistical Summary',
    description: 'Generate descriptive statistics for numeric columns',
    code: `df.describe()`,
    category: 'data-inspection',
  },
  {
    id: '9',
    title: 'Check Shape',
    description: 'Get number of rows and columns',
    code: `df.shape  # Returns (rows, columns)`,
    category: 'data-inspection',
  },
  {
    id: '10',
    title: 'View Column Names',
    description: 'List all column names in the DataFrame',
    code: `df.columns`,
    category: 'data-inspection',
  },
  {
    id: '11',
    title: 'Drop Missing Values',
    description: 'Remove rows with any missing values',
    code: `df.dropna()  # Remove rows with any NaN
df.dropna(axis=1)  # Remove columns with any NaN`,
    category: 'data-cleaning',
  },
  {
    id: '12',
    title: 'Fill Missing Values',
    description: 'Replace missing values with specified value',
    code: `df.fillna(0)  # Fill with 0
df.fillna(df.mean())  # Fill with mean`,
    category: 'data-cleaning',
  },
  {
    id: '13',
    title: 'Drop Duplicates',
    description: 'Remove duplicate rows',
    code: `df.drop_duplicates()
df.drop_duplicates(subset=['column'])`,
    category: 'data-cleaning',
  },
  {
    id: '14',
    title: 'Rename Columns',
    description: 'Rename one or more columns',
    code: `df.rename(columns={'old_name': 'new_name'})`,
    category: 'data-cleaning',
  },
  {
    id: '15',
    title: 'Change Data Type',
    description: 'Convert column to different data type',
    code: `df['column'] = df['column'].astype('int')
df['date'] = pd.to_datetime(df['date'])`,
    category: 'data-cleaning',
  },
  {
    id: '16',
    title: 'Select Single Column',
    description: 'Select a single column as a Series',
    code: `df['column_name']
df.column_name  # Alternative syntax`,
    category: 'filtering-selection',
  },
  {
    id: '17',
    title: 'Select Multiple Columns',
    description: 'Select multiple columns as a DataFrame',
    code: `df[['col1', 'col2', 'col3']]`,
    category: 'filtering-selection',
  },
  {
    id: '18',
    title: 'Filter by Condition',
    description: 'Filter rows based on a condition',
    code: `df[df['age'] > 25]
df[df['name'] == 'John']`,
    category: 'filtering-selection',
  },
  {
    id: '19',
    title: 'Multiple Conditions',
    description: 'Filter using multiple conditions with & (and) or | (or)',
    code: `df[(df['age'] > 25) & (df['city'] == 'NYC')]
df[(df['age'] < 18) | (df['age'] > 65)]`,
    category: 'filtering-selection',
  },
  {
    id: '20',
    title: 'Select by Position',
    description: 'Select rows and columns by position using iloc',
    code: `df.iloc[0]  # First row
df.iloc[0:5, 0:3]  # First 5 rows, first 3 columns`,
    category: 'filtering-selection',
  },
  {
    id: '21',
    title: 'Select by Label',
    description: 'Select rows and columns by label using loc',
    code: `df.loc[0, 'column_name']
df.loc[0:5, ['col1', 'col2']]`,
    category: 'filtering-selection',
  },
  {
    id: '22',
    title: 'GroupBy Single Column',
    description: 'Group data by a single column and aggregate',
    code: `df.groupby('category').sum()
df.groupby('category').mean()`,
    category: 'groupby-aggregation',
  },
  {
    id: '23',
    title: 'GroupBy Multiple Columns',
    description: 'Group by multiple columns',
    code: `df.groupby(['category', 'region']).sum()`,
    category: 'groupby-aggregation',
  },
  {
    id: '24',
    title: 'Aggregate Functions',
    description: 'Apply multiple aggregation functions',
    code: `df.groupby('category').agg({
    'sales': ['sum', 'mean'],
    'quantity': 'count'
})`,
    category: 'groupby-aggregation',
  },
  {
    id: '25',
    title: 'Value Counts',
    description: 'Count unique values in a column',
    code: `df['column'].value_counts()`,
    category: 'groupby-aggregation',
  },
  {
    id: '26',
    title: 'Pivot Table',
    description: 'Create a spreadsheet-style pivot table',
    code: `df.pivot_table(
    values='sales',
    index='category',
    columns='region',
    aggfunc='sum'
)`,
    category: 'groupby-aggregation',
  },
  {
    id: '27',
    title: 'Merge DataFrames',
    description: 'SQL-style merge of two DataFrames',
    code: `pd.merge(df1, df2, on='key')
pd.merge(df1, df2, left_on='col1', right_on='col2')`,
    category: 'merging-joining',
  },
  {
    id: '28',
    title: 'Join Types',
    description: 'Different types of joins (inner, outer, left, right)',
    code: `pd.merge(df1, df2, on='key', how='inner')
pd.merge(df1, df2, on='key', how='left')
pd.merge(df1, df2, on='key', how='outer')`,
    category: 'merging-joining',
  },
  {
    id: '29',
    title: 'Concatenate DataFrames',
    description: 'Combine DataFrames vertically or horizontally',
    code: `pd.concat([df1, df2])  # Stack vertically
pd.concat([df1, df2], axis=1)  # Stack horizontally`,
    category: 'merging-joining',
  },
  {
    id: '30',
    title: 'Line Plot',
    description: 'Create a simple line plot',
    code: `df.plot()
df['column'].plot(kind='line')`,
    category: 'visualization',
  },
  {
    id: '31',
    title: 'Bar Chart',
    description: 'Create a bar chart',
    code: `df.plot(kind='bar')
df['column'].value_counts().plot(kind='bar')`,
    category: 'visualization',
  },
  {
    id: '32',
    title: 'Histogram',
    description: 'Create a histogram for distribution analysis',
    code: `df['column'].plot(kind='hist', bins=20)
df.hist()  # Histogram for all numeric columns`,
    category: 'visualization',
  },
  {
    id: '33',
    title: 'Box Plot',
    description: 'Create a box plot to show distribution and outliers',
    code: `df.boxplot(column='value', by='category')
df.plot(kind='box')`,
    category: 'visualization',
  },
  {
    id: '34',
    title: 'Scatter Plot',
    description: 'Create a scatter plot for correlation analysis',
    code: `df.plot(kind='scatter', x='col1', y='col2')`,
    category: 'visualization',
  },
    {
    id: '35',
    title: 'SELECT ALL',
    description: 'Retrieve all rows and columns',
    code: `SELECT * FROM table_name;`,
    category: 'sql-basics',
  },
  {
    id: '36',
    title: 'SELECT COLUMNS',
    description: 'Select specific columns',
    code: `SELECT column1, column2 FROM table_name;`,
    category: 'sql-basics',
  },
  {
    id: '37',
    title: 'WHERE FILTER',
    description: 'Filter rows using condition',
    code: `SELECT * FROM table_name
WHERE age > 25;`,
    category: 'sql-basics',
  },
  {
    id: '38',
    title: 'AND / OR',
    description: 'Multiple conditions',
    code: `SELECT * FROM table_name
WHERE age > 25 AND city = 'NYC';`,
    category: 'sql-basics',
  },
  {
    id: '39',
    title: 'ORDER BY (Oracle)',
    description: 'Sort results',
    code: `SELECT * FROM table_name
ORDER BY age ASC;`,
    category: 'sql-basics',
  },
  {
    id: '40',
    title: 'ROWNUM (LIMIT in Oracle)',
    description: 'Limit rows in Oracle (no LIMIT keyword)',
    code: `SELECT * FROM table_name
WHERE ROWNUM <= 10;`,
    category: 'sql-basics',
  },
  {
    id: '41',
    title: 'INSERT (Oracle)',
    description: 'Insert a new row',
    code: `INSERT INTO table_name (col1, col2)
VALUES ('value1', 'value2');

COMMIT;`,
    category: 'sql-basics',
  },
  {
    id: '42',
    title: 'UPDATE (Oracle)',
    description: 'Update existing rows',
    code: `UPDATE table_name
SET column1 = 'value'
WHERE id = 1;

COMMIT;`,
    category: 'sql-basics',
  },
  {
    id: '43',
    title: 'DELETE (Oracle)',
    description: 'Delete rows',
    code: `DELETE FROM table_name
WHERE id = 1;

COMMIT;`,
    category: 'sql-basics',
  },
  {
    id: '44',
    title: 'CREATE TABLE (Oracle)',
    description: 'Create a table',
    code: `CREATE TABLE users (
  id NUMBER PRIMARY KEY,
  name VARCHAR2(100),
  age NUMBER
);`,
    category: 'sql-basics',
  },
  {
    id: '45',
    title: 'DROP TABLE',
    description: 'Delete table',
    code: `DROP TABLE table_name;`,
    category: 'sql-basics',
  },
  {
    id: '46',
    title: 'ALTER TABLE ADD',
    description: 'Add a column',
    code: `ALTER TABLE table_name
ADD email VARCHAR2(255);`,
    category: 'sql-basics',
  },
  {
    id: '47',
    title: 'ALTER TABLE DROP',
    description: 'Remove a column',
    code: `ALTER TABLE table_name
DROP COLUMN column_name;`,
    category: 'sql-basics',
  },
  {
    id: '48',
    title: 'DISTINCT',
    description: 'Get unique values',
    code: `SELECT DISTINCT city FROM users;`,
    category: 'sql-basics',
  },
  {
    id: '49',
    title: 'COUNT',
    description: 'Count rows',
    code: `SELECT COUNT(*) FROM users;`,
    category: 'sql-basics',
  },
  {
    id: '50',
    title: 'SUM',
    description: 'Sum values',
    code: `SELECT SUM(salary) FROM employees;`,
    category: 'sql-basics',
  },
  {
    id: '51',
    title: 'AVG',
    description: 'Average value',
    code: `SELECT AVG(salary) FROM employees;`,
    category: 'sql-basics',
  },
  {
    id: '52',
    title: 'MIN / MAX',
    description: 'Min and Max values',
    code: `SELECT MIN(age), MAX(age) FROM users;`,
    category: 'sql-basics',
  },
  {
    id: '53',
    title: 'GROUP BY',
    description: 'Group rows',
    code: `SELECT city, COUNT(*)
FROM users
GROUP BY city;`,
    category: 'sql-basics',
  },
  {
    id: '54',
    title: 'HAVING (Oracle)',
    description: 'Filter groups',
    code: `SELECT city, COUNT(*)
FROM users
GROUP BY city
HAVING COUNT(*) > 5;`,
    category: 'sql-basics',
  },
  {
    id: '55',
    title: 'INNER JOIN',
    description: 'Join tables',
    code: `SELECT *
FROM users u
JOIN orders o ON u.id = o.user_id;`,
    category: 'sql-basics',
  },
  {
    id: '56',
    title: 'LEFT JOIN',
    description: 'Left outer join',
    code: `SELECT *
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;`,
    category: 'sql-basics',
  },
  {
    id: '57',
    title: 'RIGHT JOIN',
    description: 'Right outer join',
    code: `SELECT *
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;`,
    category: 'sql-basics',
  },
  {
    id: '58',
    title: 'FULL OUTER JOIN (Oracle)',
    description: 'Full join supported in Oracle',
    code: `SELECT *
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;`,
    category: 'sql-basics',
  },
  {
    id: '59',
    title: 'LIKE',
    description: 'Pattern matching',
    code: `SELECT * FROM users
WHERE name LIKE 'A%';`,
    category: 'sql-basics',
  },
  {
    id: '60',
    title: 'IN',
    description: 'Multiple values filter',
    code: `SELECT * FROM users
WHERE city IN ('Paris', 'London');`,
    category: 'sql-basics',
  },
  {
    id: '61',
    title: 'BETWEEN',
    description: 'Range filter',
    code: `SELECT * FROM users
WHERE age BETWEEN 18 AND 30;`,
    category: 'sql-basics',
  },
  {
    id: '62',
    title: 'IS NULL',
    description: 'Null check',
    code: `SELECT * FROM users
WHERE email IS NULL;`,
    category: 'sql-basics',
  },
  {
    id: '63',
    title: 'SEQUENCE (Oracle)',
    description: 'Auto-increment using sequence',
    code: `CREATE SEQUENCE user_seq START WITH 1 INCREMENT BY 1;

INSERT INTO users (id, name)
VALUES (user_seq.NEXTVAL, 'John');`,
    category: 'sql-basics',
  },
  {
    id: '64',
    title: 'CASE WHEN',
    description: 'Conditional logic',
    code: `SELECT name,
CASE 
  WHEN age < 18 THEN 'Minor'
  ELSE 'Adult'
END AS category
FROM users;`,
    category: 'sql-basics',
  },
    {
    id: '65',
    title: 'PRIMARY KEY Constraint',
    description: 'Uniquely identifies each row (NOT NULL + UNIQUE)',
    code: `CREATE TABLE users (
  id NUMBER PRIMARY KEY,
  name VARCHAR2(100)
);`,
    category: 'sql-basics',
  },
  {
    id: '66',
    title: 'FOREIGN KEY Constraint',
    description: 'Links two tables together',
    code: `CREATE TABLE orders (
  id NUMBER PRIMARY KEY,
  user_id NUMBER,
  CONSTRAINT fk_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);`,
    category: 'sql-basics',
  },
  {
    id: '67',
    title: 'NOT NULL Constraint',
    description: 'Column cannot contain NULL values',
    code: `CREATE TABLE users (
  id NUMBER,
  name VARCHAR2(100) NOT NULL
);`,
    category: 'sql-basics',
  },
  {
    id: '68',
    title: 'UNIQUE Constraint',
    description: 'Ensures all values in a column are unique',
    code: `CREATE TABLE users (
  id NUMBER,
  email VARCHAR2(255),
  CONSTRAINT uq_email UNIQUE (email)
);`,
    category: 'sql-basics',
  },
  {
    id: '69',
    title: 'CHECK Constraint',
    description: 'Enforces a condition on column values',
    code: `CREATE TABLE users (
  id NUMBER,
  age NUMBER,
  CONSTRAINT chk_age CHECK (age >= 18)
);`,
    category: 'sql-basics',
  },
  {
    id: '70',
    title: 'DEFAULT Constraint',
    description: 'Sets default value for a column',
    code: `CREATE TABLE users (
  id NUMBER,
  status VARCHAR2(20) DEFAULT 'ACTIVE'
);`,
    category: 'sql-basics',
  },
  {
    id: '71',
    title: 'ADD PRIMARY KEY (ALTER TABLE)',
    description: 'Add primary key to existing table',
    code: `ALTER TABLE users
ADD CONSTRAINT pk_users PRIMARY KEY (id);`,
    category: 'sql-basics',
  },
  {
    id: '72',
    title: 'ADD FOREIGN KEY (ALTER TABLE)',
    description: 'Add foreign key to existing table',
    code: `ALTER TABLE orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES users(id);`,
    category: 'sql-basics',
  },
  {
    id: '73',
    title: 'DROP CONSTRAINT',
    description: 'Remove a constraint from a table',
    code: `ALTER TABLE users
DROP CONSTRAINT pk_users;`,
    category: 'sql-basics',
  },
  {
    id: '74',
    title: 'ENABLE / DISABLE CONSTRAINT',
    description: 'Turn constraints on or off',
    code: `ALTER TABLE users DISABLE CONSTRAINT pk_users;

ALTER TABLE users ENABLE CONSTRAINT pk_users;`,
    category: 'sql-basics',
  },
  {
    id: '75',
    title: 'VIEW CONSTRAINTS',
    description: 'Check constraints in Oracle data dictionary',
    code: `SELECT constraint_name, constraint_type, table_name
FROM user_constraints;`,
    category: 'sql-basics',
  },
  {
    id: '76',
    title: 'VIEW CONSTRAINT COLUMNS',
    description: 'See which columns are affected',
    code: `SELECT constraint_name, column_name, table_name
FROM user_cons_columns;`,
    category: 'sql-basics',
  },
    {
    id: '77',
    title: 'PL/SQL Anonymous Block',
    description: 'Basic PL/SQL execution block',
    code: `BEGIN
  DBMS_OUTPUT.PUT_LINE('Hello Oracle');
END;`,
    category: 'sql-basics',
  },
  {
    id: '78',
    title: 'DECLARE Variables (PL/SQL)',
    description: 'Declare variables in PL/SQL block',
    code: `DECLARE
  v_name VARCHAR2(50) := 'Ali';
BEGIN
  DBMS_OUTPUT.PUT_LINE(v_name);
END;`,
    category: 'sql-basics',
  },
  {
    id: '79',
    title: 'IF Statement (PL/SQL)',
    description: 'Conditional logic in PL/SQL',
    code: `DECLARE
  v_age NUMBER := 20;
BEGIN
  IF v_age >= 18 THEN
    DBMS_OUTPUT.PUT_LINE('Adult');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Minor');
  END IF;
END;`,
    category: 'sql-basics',
  },
  {
    id: '80',
    title: 'LOOP (PL/SQL)',
    description: 'Basic loop structure',
    code: `DECLARE
  i NUMBER := 1;
BEGIN
  LOOP
    DBMS_OUTPUT.PUT_LINE(i);
    i := i + 1;
    EXIT WHEN i > 5;
  END LOOP;
END;`,
    category: 'sql-basics',
  },
  {
    id: '81',
    title: 'FOR LOOP (PL/SQL)',
    description: 'Loop with range',
    code: `BEGIN
  FOR i IN 1..5 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
  END LOOP;
END;`,
    category: 'sql-basics',
  },
  {
    id: '82',
    title: 'WHILE LOOP (PL/SQL)',
    description: 'While loop structure',
    code: `DECLARE
  i NUMBER := 1;
BEGIN
  WHILE i <= 5 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
    i := i + 1;
  END LOOP;
END;`,
    category: 'sql-basics',
  },
  {
    id: '83',
    title: 'SELECT INTO (PL/SQL)',
    description: 'Fetch single row into variable',
    code: `DECLARE
  v_name VARCHAR2(50);
BEGIN
  SELECT name INTO v_name
  FROM users
  WHERE id = 1;

  DBMS_OUTPUT.PUT_LINE(v_name);
END;`,
    category: 'sql-basics',
  },
  {
    id: '84',
    title: 'CREATE PROCEDURE',
    description: 'Reusable PL/SQL procedure',
    code: `CREATE OR REPLACE PROCEDURE get_user (
  p_id NUMBER
) AS
  v_name VARCHAR2(50);
BEGIN
  SELECT name INTO v_name
  FROM users
  WHERE id = p_id;

  DBMS_OUTPUT.PUT_LINE(v_name);
END;`,
    category: 'sql-basics',
  },
  {
    id: '85',
    title: 'CREATE FUNCTION',
    description: 'Function that returns a value',
    code: `CREATE OR REPLACE FUNCTION get_age (
  p_id NUMBER
) RETURN NUMBER AS
  v_age NUMBER;
BEGIN
  SELECT age INTO v_age
  FROM users
  WHERE id = p_id;

  RETURN v_age;
END;`,
    category: 'sql-basics',
  },
  {
    id: '86',
    title: 'CURSOR (PL/SQL)',
    description: 'Iterate over query results',
    code: `DECLARE
  CURSOR c_users IS SELECT name FROM users;
  v_name users.name%TYPE;
BEGIN
  OPEN c_users;
  LOOP
    FETCH c_users INTO v_name;
    EXIT WHEN c_users%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_name);
  END LOOP;
  CLOSE c_users;
END;`,
    category: 'sql-basics',
  },
  {
    id: '87',
    title: 'BEFORE INSERT TRIGGER',
    description: 'Trigger executed before insert',
    code: `CREATE OR REPLACE TRIGGER trg_before_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
  :NEW.created_at := SYSDATE;
END;`,
    category: 'sql-basics',
  },
  {
    id: '88',
    title: 'AFTER INSERT TRIGGER',
    description: 'Trigger executed after insert',
    code: `CREATE OR REPLACE TRIGGER trg_after_insert
AFTER INSERT ON users
FOR EACH ROW
BEGIN
  DBMS_OUTPUT.PUT_LINE('User inserted');
END;`,
    category: 'sql-basics',
  },
  {
    id: '89',
    title: 'BEFORE UPDATE TRIGGER',
    description: 'Trigger before updating a row',
    code: `CREATE OR REPLACE TRIGGER trg_before_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
  :NEW.updated_at := SYSDATE;
END;`,
    category: 'sql-basics',
  },
  {
    id: '90',
    title: 'BEFORE DELETE TRIGGER',
    description: 'Trigger before delete operation',
    code: `CREATE OR REPLACE TRIGGER trg_before_delete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
  DBMS_OUTPUT.PUT_LINE('Deleting user');
END;`,
    category: 'sql-basics',
  },
  {
    id: '91',
    title: 'AUDIT TRIGGER EXAMPLE',
    description: 'Track changes in a table',
    code: `CREATE OR REPLACE TRIGGER trg_audit_users
AFTER INSERT OR UPDATE OR DELETE ON users
FOR EACH ROW
BEGIN
  INSERT INTO users_audit(log_date, action)
  VALUES (SYSDATE, 'CHANGE OCCURRED');
END;`,
    category: 'sql-basics',
  },
    {
    id: '92',
    title: 'FOREIGN KEY ON DELETE CASCADE',
    description: 'Delete child rows automatically when parent is deleted',
    code: `CREATE TABLE orders (
  id NUMBER PRIMARY KEY,
  user_id NUMBER,
  CONSTRAINT fk_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);`,
    category: 'sql-basics',
  },
  {
    id: '93',
    title: 'FOREIGN KEY ON DELETE SET NULL',
    description: 'Set foreign key to NULL when parent is deleted',
    code: `CREATE TABLE orders (
  id NUMBER PRIMARY KEY,
  user_id NUMBER,
  CONSTRAINT fk_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE SET NULL
);`,
    category: 'sql-basics',
  },
  {
    id: '94',
    title: 'DROP TABLE CASCADE CONSTRAINTS',
    description: 'Drop table with all dependent constraints',
    code: `DROP TABLE users CASCADE CONSTRAINTS;`,
    category: 'sql-basics',
  },
  {
    id: '95',
    title: 'CREATE TABLESPACE',
    description: 'Create a permanent tablespace',
    code: `CREATE TABLESPACE users_tbs
DATAFILE 'users_tbs.dbf'
SIZE 100M
AUTOEXTEND ON
NEXT 10M MAXSIZE UNLIMITED;`,
    category: 'sql-basics',
  },
  {
    id: '96',
    title: 'CREATE TEMPORARY TABLESPACE',
    description: 'Create a temporary tablespace',
    code: `CREATE TEMPORARY TABLESPACE temp_tbs
TEMPFILE 'temp_tbs.dbf'
SIZE 50M
AUTOEXTEND ON;`,
    category: 'sql-basics',
  },
  {
    id: '97',
    title: 'CREATE USER',
    description: 'Create a new Oracle user',
    code: `CREATE USER ali
IDENTIFIED BY password
DEFAULT TABLESPACE users_tbs
TEMPORARY TABLESPACE temp_tbs
QUOTA UNLIMITED ON users_tbs;`,
    category: 'sql-basics',
  },
  {
    id: '98',
    title: 'DROP USER',
    description: 'Delete user and all objects',
    code: `DROP USER ali CASCADE;`,
    category: 'sql-basics',
  },
  {
    id: '99',
    title: 'CREATE PROFILE',
    description: 'Create profile with resource limits',
    code: `CREATE PROFILE user_profile LIMIT
SESSIONS_PER_USER 2
CPU_PER_SESSION 10000
CONNECT_TIME 60
FAILED_LOGIN_ATTEMPTS 3;`,
    category: 'sql-basics',
  },
  {
    id: '100',
    title: 'ASSIGN PROFILE TO USER',
    description: 'Attach profile to a user',
    code: `ALTER USER ali PROFILE user_profile;`,
    category: 'sql-basics',
  },
  {
    id: '101',
    title: 'GRANT SYSTEM PRIVILEGES',
    description: 'Grant system privileges',
    code: `GRANT CREATE SESSION, CREATE TABLE TO ali;`,
    category: 'sql-basics',
  },
  {
    id: '102',
    title: 'GRANT OBJECT PRIVILEGES',
    description: 'Grant privileges on specific table',
    code: `GRANT SELECT, INSERT, UPDATE
ON users
TO ali;`,
    category: 'sql-basics',
  },
  {
    id: '103',
    title: 'GRANT WITH ADMIN OPTION',
    description: 'Allow user to grant privileges to others',
    code: `GRANT CREATE TABLE TO ali WITH ADMIN OPTION;`,
    category: 'sql-basics',
  },
  {
    id: '104',
    title: 'GRANT WITH GRANT OPTION',
    description: 'Allow user to grant object privileges',
    code: `GRANT SELECT ON users TO ali WITH GRANT OPTION;`,
    category: 'sql-basics',
  },
  {
    id: '105',
    title: 'REVOKE SYSTEM PRIVILEGES',
    description: 'Remove system privileges',
    code: `REVOKE CREATE TABLE FROM ali;`,
    category: 'sql-basics',
  },
  {
    id: '106',
    title: 'REVOKE OBJECT PRIVILEGES',
    description: 'Remove privileges on table',
    code: `REVOKE SELECT, INSERT ON users FROM ali;`,
    category: 'sql-basics',
  },
  {
    id: '107',
    title: 'CREATE ROLE',
    description: 'Create a role to manage privileges',
    code: `CREATE ROLE manager_role;`,
    category: 'sql-basics',
  },
  {
    id: '108',
    title: 'GRANT ROLE TO USER',
    description: 'Assign role to user',
    code: `GRANT manager_role TO ali;`,
    category: 'sql-basics',
  },
  {
    id: '109',
    title: 'GRANT PRIVILEGES TO ROLE',
    description: 'Assign privileges to a role',
    code: `GRANT SELECT, INSERT ON users TO manager_role;`,
    category: 'sql-basics',
  },
  {
    id: '110',
    title: 'REVOKE ROLE',
    description: 'Remove role from user',
    code: `REVOKE manager_role FROM ali;`,
    category: 'sql-basics',
  },
];
