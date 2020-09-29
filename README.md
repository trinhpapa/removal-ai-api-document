# <a href='https://removal.ai'>Removal.ai</a> API Access



## Introduction
<a href='https://removal.ai'>Removal.ai</a> is an online background remover that can quickly remove background from image within a few seconds using AI technology.
<br/>
<br/>
<p align="center">
<img src='./images/background remover.png' alt='background remover' height="300">
</p>




<br/>
This tool is suitable for multiple purposes, from professional Photography, Media to eCommerce. There are a lot more benefits from different aspects.<br/>
<br/>

### Personal & Professional
No matter who you are, what your expertise is. Remove background from image professionally with a single click.

### Saving Time, Money & More
Spending hours removing background from images? Not anymore! This way is much faster and it is FREE!

### 100% Automatic
Using Artificial Intelligence technology to quickly and efficiently separate the foreground and the background. This technology is keeping smarter day-by-day.

<br/>

## API Specifications
<a href='https://removal.ai'>Removal.ai</a> API is a REST API that can be easily integrated.

***API Endpoint***: https://api.removal.ai/2.0/remove/ <br/>
***Method***: POST
***Usage***: To remove background from the provided image.

### Headers:
@header: ***___Rm-Token___*** <br/>
- Your secrete token. Located in your header.

<br/>


### Params:
@param: ***___file___*** <br/>
- Your your base64 image or url to your image.

*************************************************************
<br/>

***API Endpoint***: https://api.removal.ai/2.0/account/ <br/>
***Method***: GET
***Usage***: Get account information

### Headers:
@header: ***___Rm-Token___*** <br/>
- Your secrete token. Located in your header.

*************************************************************
<br/>

***API Endpoint***: https://api.removal.ai/2.0/account/credit/ <br/>
***Method***: GET
***Usage***: Check avaialable credits.

### Headers:
@header: ***___Rm-Token___*** <br/>
- Your secrete token. Located in your header.


*************************************************************
<br/>

***API Endpoint***: https://api.removal.ai/2.0/account/update-token/ <br/>
***Method***: PUT
***Usage***: Generate new token.

### Headers:
@header: ***___Rm-Token___*** <br/>
- Your secrete token. Located in your header.