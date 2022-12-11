---
title: Machine Learning using Apache Spark.
description: Machine Learning using Apache Spark.

head:
  - - meta
    - name: description
      content: Machine Learning using Apache Spark. 
  - - meta
    - name: keywords
      content: apache-spark scala machine-learning
---

# Machine Learning with Apache Spark on Scala.

## Introduction

This tutorial will provide an introduction to learning Machine Learning using Apache Spark in Scala. It will cover the basics of how to install Spark, use its API and develop ML models in Scala.

## Prerequisites

Before starting the tutorial, make sure you have the following:

- [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Apache Spark](https://spark.apache.org/)
- [Scala](https://www.scala-lang.org/)

## Installation

1. Install the Java Development Kit (JDK) from the link provided in the Prerequisites section.

2. Install Apache Spark from the link provided.

3. Install Scala from the link provided.

## Developing ML Models

1. Open the Spark shell and import the required packages:

```scala
import org.apache.spark.ml.{Pipeline, PipelineModel}
import org.apache.spark.ml.classification.LogisticRegression
import org.apache.spark.ml.evaluation.BinaryClassificationEvaluator
import org.apache.spark.ml.feature.{HashingTF, Tokenizer}
import org.apache.spark.ml.tuning.{CrossValidator, ParamGridBuilder}
```

2. Create the data frame for training the model:

```scala
val training = spark.createDataFrame(Seq(
  (0L, "a b c d e spark", 1.0),
  (1L, "b d", 0.0),
  (2L, "spark f g h", 1.0),
  (3L, "hadoop mapreduce", 0.0)
)).toDF("id", "text", "label")
```

3. Define the tokenizer and the hashing term frequency:

```scala
val tokenizer = new Tokenizer().setInputCol("text").setOutputCol("words")
val hashingTF = new HashingTF().setNumFeatures(1000).setInputCol(tokenizer.getOutputCol).setOutputCol("features")
```

4. Create the logistic regression model:

```scala
val lr = new LogisticRegression().setMaxIter(10).setRegParam(0.001)
```

5. Create the pipeline:

```scala
val pipeline = new Pipeline().setStages(Array(tokenizer, hashingTF, lr))
```

6. Create the parameter grid:

```scala
val paramGrid = new ParamGridBuilder()
  .addGrid(hashingTF.numFeatures, Array(10, 100, 1000))
  .addGrid(lr.regParam, Array(0.1, 0.01))
  .build()
```

7. Create the cross-validator:

```scala
val cv = new CrossValidator()
  .setEstimator(pipeline)
  .setEvaluator(new BinaryClassificationEvaluator)
  .setEstimatorParamMaps(paramGrid)
  .setNumFolds(2)
```

8. Train the model and save the model to a file:

```scala
val cvModel = cv.fit(training)
cvModel.write.overwrite().save("/path/to/model.file")
```

9. Load the model and use it to make predictions:

```scala
val model = PipelineModel.load("/path/to/model.file")
val predictions = model.transform(test)
```

## Conclusion

This tutorial provided an introduction to learning Machine Learning using Apache Spark in Scala. We covered the basics of how to install Spark, use its API and develop ML models in Scala. We also saw an example of how to create a logistic regression model and use it to make predictions.