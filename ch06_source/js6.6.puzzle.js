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
		//5�� �Ŀ� ���ĺ��� �����.
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
				//1. ó�� ������?
				//   1.1 �ӽ÷� ó�� �������� ���� �ϵ��� �Ѵ�.
				//2. �ι�° ������?
				//   2.1 ó�� �����Ͱ� ���� ���ĺ��ΰ�?
				//3. ó�� ������ �� ������?
				compare(this);
			}
		}
		var tmpCell = null;
		compare = function(cell) {
			if(tmpCell == null) {
				//alert('ó�� ������.');
				tmpCell = cell;
				chageData(cell);
			} else {
				//������ �� ������?
				//�ٸ��� �����ٸ� ���Ѵ�.
				if(tmpCell == cell) {
					alert('ó�� �����Ͱ� ����.');
				} else {
					chageData(cell);
					//���ĺ��� �������ΰ�?
					if(tmpCell.alphabet == cell.alphabet) {
						alert('¦�� �½��ϴ�.');
						tmpCell.onclick = null;
						cell.onclick = null;
					} else {
						alert("�����Դϴ�.");
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











