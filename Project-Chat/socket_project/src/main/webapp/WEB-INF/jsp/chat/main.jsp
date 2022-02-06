<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Chatting Page</title>
		<meta name="description" content="Chatting Page">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<!-- css -->
		<link rel="stylesheet" href="/assets/css/main.css">
		
		<!-- Script -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="/assets/js/main.js"></script>
	</head>
	
	<body>
		<div id="container" class="container">
			<h1>${roomName} 채팅방</h1>
			<input type="hidden" id="sessionId" value=""> 
			<input type="hidden" id="roomNumber" value="${roomNumber}">
	
			<div id="chating" class="chating"></div>
	
			<div id="yourName">
				<table class="inputTable">
					<tr>
						<th style="color:#FFBB00">대화명 : </th>
						<th><input type="text" name="userName" id="userName" placeholder="대화명을 입력해주세요."></th>
						<th><button onclick="chatName()" id="startBtn">등록</button></th>
					</tr>
				</table>
			</div>
			<div id="yourMsg">
				<table class="inputTable">
					<tr>
						<th style="color:#FFBB00">메시지 : </th>
						<th><input id="chatting" placeholder="보내실 메시지를 입력하세요."></th>
						<th><button onclick="send()" id="sendBtn">보내기</button></th>
					</tr>
				</table>
			</div>
		</div>
	</body>
</html>