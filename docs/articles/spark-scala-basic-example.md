---
title: Spark on Scala basic example
description: A basic example of how to get started with Apache Spark on Scala.

head:
  - - meta
    - name: description
      content: A basic example of how to use Apache Spark with Scala.
  - - meta
    - name: keywords
      content: apache-spark data-engineering scala
---

# Apache Spark on Scala basic example

<Badge type="info" text="apache-spark" />
<Badge type="info" text="scala" />
<Badge type="info" text="data-engineering" />

![Apache Spark](/assets/spark_scala_container.svg)

## Overview

[Apache Spark](https://spark.apache.org/) is a unified analytics engine for large-scale data processing.
[Scala](https://www.scala-lang.org/) is a programming language that combines object-oriented and functional 
programming in one concise, high-level language. Combined they are used to create powerful data applications in the 
ETL/ELT, ML and AI universes.

This article will walk you through a basic example of setting up and performing 
fundamental data operations that will help get your feet wet with modern big data
engineering concepts.

The full code base for this example is published [here](https://github.com/rycharlind/spark-scala-examples/blob/master/src/main/scala/basic/BaseExample.scala) if you would like to go straight to the source.  

## 1. Set up Scala Build Tool (sbt).

Download and install [sbt](https://www.scala-sbt.org/download.html).  

[sbt](https://www.scala-sbt.org/) is Scala's interactive build tool. It will allow you run your app, define project 
dependencies, apply plugins and more. Review the [sbt docs](https://www.scala-sbt.org/1.x/docs/)
for more info on how to use it.

After you have downloaded and installed it, run `sbt help` to ensure that it is installed properly.

## 2. Create new project directory.

Create a new directory called `spark-scala-examples` and navigate into it from your terminal. If you'd like, you can
name this directory whatever you want. We will refer to this as the `root` of your project.

```bash
mkdir spark-scala-examples && cd spark-scala-examples
```

## 3. Open project in Visual Studio Code.

If you don't already have it installed, go [here](https://code.visualstudio.com/download)
and install it for your operating system.

[Visual Stdio Code](https://code.visualstudio.com/) (VS Code) is an Integrated Development Environment tool, or IDE for short. 
This is what we will use to edit our code files for this project.


You may choose to use other IDE's if you want. Other popular IDE's include [IntelliJ](https://www.jetbrains.com/idea/)
and [Atom](https://atom.io/).

## 4. Create SBT build file.

From within Visual Studio Code, create a new file inside the `root` directory called `build.sbt`
and add the following code to it.

```scala
ThisBuild / scalaVersion := "2.12.17"
ThisBuild / organization := "com.inndevers"

val sparkVersion = "3.2.2"

lazy val root = (project in file("."))
  .settings(
    name := "SparkScalaExamples",
    libraryDependencies += "org.apache.spark" %% "spark-core" % sparkVersion,
    libraryDependencies += "org.apache.spark" %% "spark-sql" % sparkVersion,
    libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.7" % Test
  )
```

This file should stay at the `root` of your project.  Let's review some of the key lines in here.
- Line 1: Indicates the version of Scala you will use for this projects. In this case, it's `2.12.17`.
- Line 2: Indicates your package organization. You can change this to whatever you'd like. 
- Line 4: Indicates the version fo Spark we will use. In this case, it's `3.2.2`.
- Line 6: Initiates the root project settings.
- Line 8: Configures the name of the app. You can make this whatever you'd like.
- Lines 9-11: These identify the dependencies required for our project. As you can see we have `spark-core` and `spark-sql`. We also have `scalatest` which we do not use in this demo, however it's always good to add when you're ready to jump into [Unit Testing](https://www.scalatest.org/user_guide/writing_your_first_test). 


## 5. Create main class.

Create the main `Scala` class that will be the entry point into your app. 
We'll call this class `BasicExample.scala`.  But first, lets create the app
directory structure.

From within the `root` of your project, create the following directory structure.

```
.
├── src
│   └── main
│       └── scala
│           └── basic
│               └── BasicExample.scala
└── build.sbt
```

Then, create a file named `BasicExample.scala` inside of the `basic` folder and 
add the following code to it.

```scala
package basic

object BasicExample {
  def main(args: Array[String]): Unit = {
  }
}
```

## 6. Set up Apache Spark.

Import the Apache Spark libraries and update your 
`BasicExample.scala` file to build and configure a `SparkSession`.

```scala{3,4,9,10,11,13,14,15,16}
package basic

import org.apache.spark.SparkConf
import org.apache.spark.sql.{SparkSession}

object BasicExample {
  def main(args: Array[String]): Unit = {

    val conf = new SparkConf()
      .setAppName("BasicExample")
      .setMaster("local[*]")

    val spark = SparkSession
      .builder()
      .config(conf)
      .getOrCreate()
  }
}
```

- Lines 3-4: This is where we `import` the Spark dependencies into our `BasicExample.scala` class. You must import your dependencies into your class before using them. 
- Lines 9-11: This is where we create our [Spark Configuration](https://spark.apache.org/docs/latest/configuration.html).
  - Line 10: `setAppName()` - This specifies the name of your Spark application. This can be whatever you'd like.
  - Line 11: `setMaster()` - This specifies the URL to your cluster. Since we will be running this locally for demo purposes, we pass in `local[*]`. The `*` means to run it with as many worker threads as logical cores on your machine. You can learn more about the `master` param [here](https://spark.apache.org/docs/latest/submitting-applications.html#master-urls).

## 7. Create sample data files.

Next, create some sample data files in `csv` format. Later on we'll use 
Spark to read them into a DataFrame and process them.

In the `root` of your project, create a new folder called `data`
and three `.csv` files called `users.csv`, `posts.csv` and `comments.csv`.

### Users.csv
```
id,name,created_at
1,John Doe,2021-01-01
2,Jane Doe,2021-02-01
```

### Posts.csv
```
id,user_id,title,created_at
1,1,My Sample Post 1,2022-01-01
1,2,My Sample Post 2,2022-03-01
```

### Comments.csv
```
id,user_id,post_id,text,created_at
1,1,1,How are you doing?,2022-01-04
1,2,1,I am doing well, you?,2022-01-05
```

Your directory structure should look like this now.

```
.
├── data
│   ├── comments.csv
│   ├── posts.csv
│   └── users.csv
├── src
│   └── main
│       └── scala
│           └── basic
│               └── BasicExample.scala
└── build.sbt
```

## 8. Read CSV files into DataFrames.

Next we'll create a function within our `BaseExample.scala` file called `readCsv()` that can read our csv files into DataFrames.

A [DataFrame](https://spark.apache.org/docs/latest/sql-programming-guide.html) is an in-memory data set organized into named columns and rows. It is conceptually equivalent to a table in a relational database, but with richer optimizations under the hood.  

```scala
private def readCsv(
    spark: SparkSession,
    dataDir: String,
    fileName: String
): DataFrame = {
  spark.read
    .option("header", true)
    .csv(s"${dataDir}/${fileName}.csv")
}
```

Add the above function underneath your `main()` function.  

Your `BaseExample.scala` file should now look like this:

```scala
package basic

import org.apache.spark.SparkConf
import org.apache.spark.sql.{SparkSession, DataFrame}

object BasicExample {
  def main(args: Array[String]): Unit = {

    val conf = new SparkConf()
      .setAppName("BasicExample")
      .setMaster("local[*]")

    val spark = SparkSession
      .builder()
      .config(conf)
      .getOrCreate()

    // todo: ...

  }

  private def readCsv(
      spark: SparkSession,
      dataDir: String,
      fileName: String
  ): DataFrame = {
    spark.read
      .option("header", true)
      .csv(s"${dataDir}/${fileName}.csv")
  }
}
```

Next, lets use the newly created `readCsv()` function to create `DataFrames`
for each of our `csv` files. Add the following code into your `main()`
function. 

```scala
// ...

val baseDataPath = sys.env.getOrElse("BASE_DATA_PATH", "./data")

val userDf = readCsv(spark, baseDataPath, "users")
val postDf = readCsv(spark, baseDataPath, "posts")
val commentDf = readCsv(spark, baseDataPath, "comments")
```

## 9. Join DataFrames

Now that we have all three files read into a DataFrame,
we can perform join logic to create a single output. 
Add the following into your `main` function.

```scala
// ...

val userDf = readCsv(spark, baseDataPath, "users")
val postDf = readCsv(spark, baseDataPath, "posts")
val commentDf = readCsv(spark, baseDataPath, "comments")

val out = postDf
  .join(userDf, postDf("user_id") === userDf("id"))
  .join(commentDf, postDf("id") === commentDf("post_id"))
  .select(
    userDf("id").as("user_id"),
    userDf("name"),
    postDf("id").as("post_id"),
    postDf("created_at").as("post_date"),
    commentDf("id").as("comment_id"),
    commentDf("created_at").as("comment_date"),
    postDf("title"),
    commentDf("text")
  )
  .orderBy("post_date", "comment_date")
```

Looking at the code above, you can see that we use Sparks `join()` function 
to join multiple DataFrame's together. After joining all three DataFrame's together,
we use the `select()` function to only project the columns we need for the final output.

## 10. Show the outputs.

Finally, we'll call the `.show()` function on our final `out` DataFrame
in order to show the results.

```scala
// ...

out.show()
```

The `.show()` function is a special Spark function that allows developers to review their DataFrames in the console. It will default to only showing you the first 20 rows in the DataFrame, however you can overwrite these limits by passing a `numRow` parameter into the function like this: `.show(1000)`.

## 11. Final Code Review

Here's what your final `BasicExample.scala` file should look like.

```scala
package basic

import org.apache.spark.SparkConf
import org.apache.spark.sql.{SparkSession, DataFrame}

object BasicExample {
  def main(args: Array[String]): Unit = {

    val conf = new SparkConf()
      .setAppName("BasicExample")
      .setMaster("local[*]")

    val spark = SparkSession
      .builder()
      .config(conf)
      .getOrCreate()

    val baseDataPath = sys.env.getOrElse("BASE_DATA_PATH", "./data")

    val userDf = readCsv(spark, baseDataPath, "users")
    val postDf = readCsv(spark, baseDataPath, "posts")
    val commentDf = readCsv(spark, baseDataPath, "comments")

    val out = postDf
      .join(userDf, postDf("user_id") === userDf("id"))
      .join(commentDf, postDf("id") === commentDf("post_id"))
      .select(
        userDf("id").as("user_id"),
        userDf("name"),
        postDf("id").as("post_id"),
        postDf("created_at").as("post_date"),
        commentDf("id").as("comment_id"),
        commentDf("created_at").as("comment_date"),
        postDf("title"),
        commentDf("text")
      )
      .orderBy("post_date", "comment_date")

    out.show()
  }

  private def readCsv(
      spark: SparkSession,
      dataDir: String,
      fileName: String
  ): DataFrame = {
    spark.read
      .option("header", true)
      .csv(s"${dataDir}/${fileName}.csv")
  }
}
```

## 12. Run your code.

Finally, lets run your code and see the results. You first need to open a Terminal 
session into your `root` project.  If you are using Visual Studio Code, the easiest way
is to go to `Terminal` in the menu and select `New Terminal`.  This should automatically
navigate you to your `root` directory.

In the terminal, enter command `sbt` to start an SBT session.  Then enter `run`
to run your application. You should see the following output in your terminal.

```
+-------+--------+-------+----------+----------+------------+----------------+------------------+
|user_id|    name|post_id| post_date|comment_id|comment_date|           title|              text|
+-------+--------+-------+----------+----------+------------+----------------+------------------+
|      1|John Doe|      1|2022-01-01|         1|  2022-01-04|My Sample Post 1|How are you doing?|
|      1|John Doe|      1|2022-01-01|         1|  2022-01-05|My Sample Post 1|  I am doing well.|
|      2|Jane Doe|      1|2022-03-01|         1|  2022-01-04|My Sample Post 2|How are you doing?|
|      2|Jane Doe|      1|2022-03-01|         1|  2022-01-05|My Sample Post 2|  I am doing well.|
+-------+--------+-------+----------+----------+------------+----------------+------------------+
```

As you can see from the above results, we joined our 
`userDf`, `postDf` and `commentDf` to create a single DataFrame
and printed the results to the console.

## Retrospective

We've learned how to use [sbt](https://www.scala-sbt.org/) to create a [Scala](https://www.scala-lang.org/) based data application using the 
[Apache Spark](https://spark.apache.org/) framework to read `csv` files into DataFrames, join them up and produce a unified output.  Spark's DataFrame API is a powerful tool for data engineering operations. 

I highly recommend you continue your research by reading their [programming guides](https://spark.apache.org/docs/latest/quick-start.html) and continue your data science/engineering journey.


