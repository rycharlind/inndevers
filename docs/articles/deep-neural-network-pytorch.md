---
title: Deep Neural Network example in PyTorch.
description: PyTorch is a powerful open source deep learning library used for both research and production. It provides a variety of tools to help data scientists and AI engineers create and deploy deep learning models quickly. In this tutorial, we will create a deep neural network (DNN) using PyTorch and explore how to use it to solve complex problems. 

head:
  - - meta
    - name: description
      content: PyTorch is a powerful open source deep learning library used for both research and production. It provides a variety of tools to help data scientists and AI engineers create and deploy deep learning models quickly. In this tutorial, we will create a deep neural network (DNN) using PyTorch and explore how to use it to solve complex problems. 
  - - meta
    - name: keywords
      content: python pytorch machine-learning
---

# Deep Neural Network example in PyTorch.

## Introduction
PyTorch is a powerful open source deep learning library used for both research and production. It provides a variety of tools to help data scientists and AI engineers create and deploy deep learning models quickly. In this tutorial, we will create a deep neural network (DNN) using PyTorch and explore how to use it to solve complex problems.

## Prerequisites
Before we get started, let's make sure you have the necessary tools installed. You will need the following:

* [Python 3.6+](https://www.python.org/downloads/)
* [PyTorch 1.3+](https://pytorch.org/get-started/locally/)

## Step 1: Import the Necessary Libraries
In this step, we will import the PyTorch libraries, as well as any other libraries we may need for our application.

```python
import torch
import torch.nn as nn
import torch.optim as optim
```

## Step 2: Define the Neural Network Architecture
Now, we will define the architecture of our neural network. In this example, we'll use a simple feed-forward network with three hidden layers and one output layer.

```python
# Define the network architecture
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(in_features=28*28, out_features=256)
        self.fc2 = nn.Linear(in_features=256, out_features=128)
        self.fc3 = nn.Linear(in_features=128, out_features=64)
        self.fc4 = nn.Linear(in_features=64, out_features=10)
 
    def forward(self, x):
        x = torch.sigmoid(self.fc1(x))
        x = torch.sigmoid(self.fc2(x))
        x = torch.sigmoid(self.fc3(x))
        x = self.fc4(x)
        return x
```

## Step 3: Instantiate the Network
Now that we have defined the architecture of our network, we can instantiate it.

```python
# Instantiate the network
model = Net()
```

## Step 4: Define the Loss Function and Optimizer
Next, we will define a loss function and optimizer for our network. In this example, we will use the cross-entropy loss and the Adam optimizer.

```python
# Define the loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)
```

## Step 5: Train the Network
Now, we can train our network. We will loop through the training data, make predictions, calculate the loss, and backpropagate the gradients to update the weights.

```python
# Train the network
for epoch in range(10):
    running_loss = 0.0
    for i, data in enumerate(trainloader, 0):
        # Get the inputs
        inputs, labels = data
 
        # Zero the parameter gradients
        optimizer.zero_grad()
 
        # Forward pass
        outputs = model(inputs)
 
        # Calculate the loss
        loss = criterion(outputs, labels)
 
        # Backward pass
        loss.backward()
 
        # Optimize
        optimizer.step()
 
        # Print statistics
        running_loss += loss.item()
        if i % 2000 == 1999:
            print('[%d, %5d] loss: %.3f' % (epoch + 1, i + 1, running_loss / 2000))
            running_loss = 0.0
```

## Step 6: Test the Network
Now that we have trained our network, we can test it on the test data.

```python
# Test the network
correct = 0
total = 0
with torch.no_grad():
    for data in testloader:
        images, labels = data
        outputs = model(images)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()
 
print('Accuracy of the network on the 10000 test images: %d %%' % (100 * correct / total))
```

## Conclusion
In this tutorial, we learned how to create a deep neural network using PyTorch. We explored how to define the architecture, create the model, define the loss function and optimizer, and train and test the network. With this knowledge, you can now use PyTorch to create deep learning models for a variety of tasks. Happy coding!