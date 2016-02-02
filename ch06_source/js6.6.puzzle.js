function Puzzle() {
	this.cells = null;
	this.tdArr = new Array(4);
	this.init = function() {
		this.cells = document.getElementsByTagName("td");
		for(var i=0; i<this.tdArr.length; i++) {
			this.tdArr[i] = new Array(4);
			for(var j=0; j<this.tdArr[i].length; j++) {
				this.tdArr[i][j] = this.cells[i*4 + j];
			}
		}
	}
	this.start = function() {
		var ch = 0;
		var row, col;
		
		for(var i=0; i<this.cells.length; ) {
			row = Math.floor(Math.random()*4);
			col = Math.floor(Math.random()*4);
			if(this.tdArr[row][col].innerHTML == ".") {
				this.tdArr[row][col].alphabet = String.fromCharCode(ch%8 + 65);
				this.tdArr[row][col].innerHTML = this.tdArr[row][col].alphabet;
				ch++;
				i++;
			}
		}
		//5초 후에 알파벳을 감춘다.
		var cells = this.cells;
		var play = this.play;
		setTimeout(function() {
			play(cells);
		},5000);
	}
	this.play = function(cells) {
		for(var i=1; i<=cells.length; i++) {
			cells[i-1].innerHTML = i;
			cells[i-1].number = i;
			cells[i-1].onclick =function() {
				//this.innerHTML = this.alphabet;
				//1. 처음 눌렀나?
				//   1.1 임시로 처음 누른것을 참조 하도록 한다.
				//2. 두번째 눌렀나?
				//   2.1 처음 누른것과 같은 알파벳인가?
				//3. 처음 눌른걸 또 눌렀나?
				compare(this);
			}
		}
		var tmpCell = null;
		compare = function(cell) {
			if(tmpCell == null) {
				//alert('처음 눌렀다.');
				tmpCell = cell;
				chageData(cell);
			} else {
				//같은걸 또 눌렀나?
				//다른걸 눌렀다면 비교한다.
				if(tmpCell == cell) {
					alert('처음 누른것과 같다.');
				} else {
					chageData(cell);
					//알파벳이 같은것인가?
					if(tmpCell.alphabet == cell.alphabet) {
						alert('짝이 맞습니다.');
						tmpCell.onclick = null;
						cell.onclick = null;
					} else {
						alert("오답입니다.");
						resetData(cell);
					}
					tmpCell = null;
				}
			}
		}
		resetData = function(cell) {
			tmpCell.style.background = "";
			cell.style.background = "";
			tmpCell.innerHTML = "" + tmpCell.number;
			cell.innerHTML = cell.number;
		}
		chageData = function(cell) {
			cell.style.background = "Yellow";
			cell.innerHTML = cell.alphabet;
		}
	}
}











