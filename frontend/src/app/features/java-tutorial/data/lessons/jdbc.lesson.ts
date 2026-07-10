import { Lesson } from '../../../../core/models/lesson.model';

export const JDBC_LESSON: Lesson = {
  slug: 'jdbc',
  title: 'Java JDBC',
  seoDescription: 'An introduction to JDBC, Java\'s standard API for connecting to and querying relational databases.',

  introduction:
    'JDBC (Java Database Connectivity) is the standard API Java provides for connecting to relational ' +
    'databases and running SQL queries against them.',

  whyItMatters:
    'Almost every non-trivial application needs to store and retrieve structured data. JDBC is the foundation ' +
    'that higher-level tools like Hibernate and Spring Data are built on top of — understanding it helps you ' +
    'understand what those frameworks are actually doing underneath.',

  explanation: [
    'To connect to a database, you need a JDBC driver for that specific database (MySQL, PostgreSQL, and so on) ' +
    'on your classpath, and a connection URL identifying the database\'s location, plus credentials.',
    'A Connection represents an open link to the database. From it, you create a Statement (or, preferably, a ' +
    'PreparedStatement) to run SQL queries, and get back a ResultSet you iterate over to read the returned ' +
    'rows.',
    'PreparedStatement is strongly preferred over a plain Statement for any query involving external input: it ' +
    'separates the SQL structure from the data values using placeholders (?), which prevents SQL injection ' +
    'attacks and is usually faster for repeated queries.',
    'Connections, statements, and result sets all implement AutoCloseable and must be closed after use — ' +
    'try-with-resources (covered in File Handling) is the standard way to guarantee that.',
    'A ResultSet is read sequentially: calling rs.next() moves a cursor forward one row at a time and returns ' +
    'false once there are no more rows, which is exactly why reading results is almost always written as a ' +
    '`while (rs.next()) { ... }` loop.',
  ],

  analogy:
    'JDBC is like a universal translator that lets Java speak to many different database "languages" (MySQL, ' +
    'PostgreSQL, and so on) through one consistent conversation pattern: open a connection, ask a prepared ' +
    'question with blanks to fill in (a PreparedStatement), and receive answers back one row at a time (the ' +
    'ResultSet). The specific database-provided driver handles translating that conversation into whatever ' +
    'dialect the actual database understands.',

  syntax: {
    code: 'try (Connection conn = DriverManager.getConnection(url, user, password);\n     PreparedStatement stmt = conn.prepareStatement(sql)) {\n    // execute query\n}',
    language: 'java',
  },

  examples: [
    {
      title: 'A Parameterized Query',
      code:
        'String sql = "SELECT name, age FROM users WHERE id = ?";\n' +
        '\n' +
        'try (Connection conn = DriverManager.getConnection(url, user, password);\n' +
        '     PreparedStatement stmt = conn.prepareStatement(sql)) {\n' +
        '\n' +
        '    stmt.setInt(1, 42);\n' +
        '\n' +
        '    try (ResultSet rs = stmt.executeQuery()) {\n' +
        '        while (rs.next()) {\n' +
        '            System.out.println(rs.getString("name") + " is " + rs.getInt("age"));\n' +
        '        }\n' +
        '    }\n' +
        '}',
      language: 'java',
      explanation: 'The ? placeholder is bound safely with setInt() — the value 42 is never concatenated into the SQL text directly.',
      lineByLine: [
        '`String sql = "SELECT ... WHERE id = ?";` — the ? is a placeholder, not literal SQL text.',
        '`DriverManager.getConnection(url, user, password)` — opens a connection to the database.',
        '`conn.prepareStatement(sql)` — compiles the SQL with its placeholder, ready to have values bound in.',
        '`stmt.setInt(1, 42);` — safely binds 42 into the first (and only) placeholder.',
        '`while (rs.next())` — advances the cursor one row at a time until there are no more results.',
      ],
    },
    {
      title: 'A Raw SQL Query (for Reference)',
      code: 'SELECT name, age FROM users WHERE id = 42;',
      language: 'sql',
      explanation: 'This is the SQL a PreparedStatement effectively runs once the ? placeholder is bound to a value.',
    },
  ],

  commonMistakes: [
    'Building SQL by string-concatenating user input directly, which opens the door to SQL injection — always use PreparedStatement placeholders instead.',
    'Forgetting to close Connection, Statement, or ResultSet objects, leaking database connections over time.',
    'Reusing a single Connection across an entire application without any pooling, which doesn\'t scale under real load.',
    'Not handling SQLException, forgetting that nearly every JDBC call can throw it.',
  ],

  tips: [
    'Always use PreparedStatement instead of Statement when a query includes any external input.',
    'Use try-with-resources for Connection, Statement, and ResultSet so they\'re closed automatically, even on exception.',
    'For real applications, use a connection pool (like HikariCP) rather than opening a new raw connection per query.',
  ],

  bestPractices: [
    'Never build SQL with string concatenation for values coming from outside the program — parameterized queries via PreparedStatement are the standard defense against SQL injection.',
    'Keep transactions as short as possible, and always commit or roll back explicitly rather than leaving a transaction open indefinitely.',
    'In production applications, use a connection pool rather than opening a new physical connection per request — connection setup is relatively expensive.',
  ],

  performanceNotes:
    'Opening a new database connection is a relatively expensive operation (network round trips, ' +
    'authentication), which is why production applications use a connection pool that keeps a set of ' +
    'connections open and ready to reuse rather than creating a fresh one per query. PreparedStatement also ' +
    'lets the database cache and reuse its query execution plan across repeated calls with different parameter ' +
    'values, which can meaningfully outperform re-parsing a new Statement\'s SQL every time.',

  interviewQuestions: [
    { question: 'What is JDBC, and what problem does it solve?', answer: 'JDBC (Java Database Connectivity) is Java\'s standard API for connecting to and querying relational databases, providing a consistent programming interface regardless of which specific database is being used.' },
    { question: 'Why is PreparedStatement preferred over Statement?', answer: 'PreparedStatement separates the SQL structure from the actual data values using placeholders, which prevents SQL injection and often performs better for repeated queries, since the database can cache the execution plan.' },
    { question: 'What is SQL injection, and how does JDBC help prevent it?', answer: 'SQL injection is an attack where malicious input is crafted to alter a query\'s intended structure when concatenated directly into SQL text. PreparedStatement prevents this by treating bound values strictly as data, never as executable SQL syntax.' },
    { question: 'How do you read results from a JDBC query?', answer: 'By calling executeQuery() on a Statement or PreparedStatement to get a ResultSet, then repeatedly calling rs.next() in a while loop to advance through each row and reading column values with methods like getString() and getInt().' },
    { question: 'Why is connection pooling important in a real application?', answer: 'Opening a new database connection is relatively expensive. A connection pool keeps a set of ready-to-use connections open and reuses them across requests, avoiding that repeated setup cost and letting the application scale to handle more concurrent database access.' },
  ],

  practiceExercises: [
    { difficulty: 'Easy', prompt: 'Write the JDBC code (connection, PreparedStatement, execute) to insert a new row into a users table, without running it against a real database.' },
    { difficulty: 'Medium', prompt: 'Write a method that takes a user ID and returns that user\'s name using a PreparedStatement and ResultSet, handling the case where no row is found.' },
    { difficulty: 'Hard', prompt: 'Write (in comments or pseudocode) an example of vulnerable SQL built via string concatenation with user input, then rewrite it as a safe PreparedStatement, explaining exactly what attack the fix prevents.' },
  ],

  summary:
    'JDBC connects Java programs to relational databases through a Connection, executes SQL via a ' +
    'PreparedStatement (preferred over Statement for safety), and reads results from a ResultSet. It\'s the ' +
    'foundation that ORMs and higher-level data-access frameworks build on top of.',
};
