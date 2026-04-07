import { Snippet, Category } from './types';

export const categories: Category[] = [
  { id: 'data-loading', name: 'Data Loading', icon: 'Download' },
  { id: 'data-inspection', name: 'Data Inspection', icon: 'Eye' },
  { id: 'data-cleaning', name: 'Data Cleaning', icon: 'Sparkles' },
  { id: 'filtering-selection', name: 'Filtering & Selection', icon: 'Filter' },
  { id: 'groupby-aggregation', name: 'GroupBy & Aggregation', icon: 'Layers' },
  { id: 'merging-joining', name: 'Merging & Joining', icon: 'Merge' },
  { id: 'visualization', name: 'Visualization', icon: 'BarChart3' },
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
];
