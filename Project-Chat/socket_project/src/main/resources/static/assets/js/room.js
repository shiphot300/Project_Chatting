var ws;

window.onload = function() {
	// 화면이 실행됨과 동시에 방 리스트를 가져온다.
	getRoom();				
	createRoom();
}

function getRoom() {
	commonAjax('/getRoom', "", 'post', function(result) {
		// 방 리스트 만들기
		createChatingRoom(result);
	});
}

// 방을 만들고, 방 리스트에 추가한다.
function createRoom() {
	$("#createRoom").click(function() {
		var msg = { roomName: $('#roomName').val() };

		commonAjax('/createRoom', msg, 'post', function(result) {
			createChatingRoom(result);
		});

		$("#roomName").val("");
	});
}

// 채팅방으로 이동
function goRoom(number, name) {
	location.href = "/moveChating?roomName=" + name + "&" + "roomNumber=" + number;
}

// 방 리스트 만들기
function createChatingRoom(res) {
	if (res != null) {
		var tag = "<tr><th class='num'>순서</th><th class='room'>방 이름</th><th class='go'></th></tr>";
		res.forEach(function(d, idx) {
			var rn = d.roomName.trim();
			var roomNumber = d.roomNumber;
			tag += "<tr>" +
				"<td class='num'>" + (idx + 1) + "</td>" +
				"<td class='room' style='padding-left:5px;'>" + rn + "</td>" +
				"<td class='go'><button type='button' onclick='goRoom(\"" + roomNumber + "\", \"" + rn + "\")'>참여</button></td>" +
				"</tr>";
		});
		$("#roomList").empty().append(tag);
	}
}

// Ajax 기본 설정
function commonAjax(url, parameter, type, calbak, contentType) {
	$.ajax({
		url: url,
		data: parameter,
		type: type,
		contentType: contentType != null ? contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		success: function(res) {
			calbak(res);
		},
		error: function(err) {
			console.log('error');
			calbak(err);
		}
	});
}