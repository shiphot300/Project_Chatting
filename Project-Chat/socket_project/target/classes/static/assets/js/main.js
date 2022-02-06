var ws;

function wsOpen() {
	//웹소켓 전송시 현재 방의 번호를 넘겨서 보낸다.
	ws = new WebSocket("ws://" + location.host + "/chating/" + $("#roomNumber").val());
	wsEvt();
}

function wsEvt() {
	ws.onopen = function(data) {
		//소켓이 열리면 동작
	}

	ws.onmessage = function(data) {
		//메시지를 받으면 동작
		var msg = data.data;
		if (msg != null && msg.trim() != '') {
			var d = JSON.parse(msg);
			if (d.type == "getId") {
				var si = d.sessionId != null ? d.sessionId : "";
				if (si != '') {
					$("#sessionId").val(si);
				}
			} else if (d.type == "message") {
				if (d.sessionId == $("#sessionId").val()) {
					// 본인이 입력한 메시지 표시 
					$("#chating").append("<div class='me'><div id='txtMe'>" + d.msg + "</div></div>");
				} else {
					// 상대방이 입력한 메시지 표시 
					$("#chating").append("<div class='others'><div id='txtOther'>" + d.msg + "</div></div>");
				}

			} else {
				console.warn("unknown type!")
			}
		}
	}

	// 메시지를 입력하고 엔터를 치면 메시지가 발송되도록 이벤트를 추가
	document.addEventListener("keypress", function(e) {
		if (e.keyCode == 13) { //enter press
			send();
		}
	});
}

// 사용자 이름 입력, 입력안하면 입력하라고 경고창 표시 
function chatName() {
	var userName = $("#userName").val();
	if (userName == null || userName.trim() == "") {
		alert("사용자 이름을 입력해주세요.");
		$("#userName").focus();
	} else {
		wsOpen();
		$("#yourName").hide();
		$("#yourMsg").show();
	}
}

// 메시지 발송 
function send() {
	// 입력된 내용 없으면 전송안됨
	if($('#chatting').val() == '') {
		return false;
	}

	var option = {
		type: "message",
		roomNumber: $("#roomNumber").val(),
		sessionId: $("#sessionId").val(),
		userName: $("#userName").val(),
		msg: $("#chatting").val()
	}
	ws.send(JSON.stringify(option))
	$('#chatting').val("");
}