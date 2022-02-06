<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Chatting Room Page</title>
		<meta name="description" content="Chatting Room Page">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<!-- css -->
		<link rel="stylesheet" href="/assets/css/room.css">
		
		<!-- Script  -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="assets/js/room.js"></script>
	</head>
	
	<body>
		<div class="container">
			<h1>채팅방 리스트</h1>
			<div id="roomContainer" class="roomContainer">
				<table id="roomList" class="roomList"></table>
			</div>
			<div>
				<table class="inputTable">
					<tr>
						<th style="color:#FFBB00">방 제목 : </th>
						<th><input type="text" name="roomName" id="roomName" style="border: 1px solid #FFBB00"></th>
						<th><button id="createRoom">방 만들기</button></th>
					</tr>
				</table>
			</div>
		</div>
	</body>
</html>