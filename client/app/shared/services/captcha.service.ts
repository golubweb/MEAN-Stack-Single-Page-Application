class captcha {
	constructor(numb) {
		this.keyCode = '';
		this.keyArray = [];
		this.keyLength = numb;
		this.alpha = Array(
			'A','B','C','D','E','F','G','H','I','J','K','L','M',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
			'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
			'a','b','c','d','e','f','g','h','i','j','k','l','m',
			'n','o','p','q','r','s','t','u','v','w','x','y','z',
			'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
		);
	}

	generateCode() {
		for(var i = 0; i < this.keyLength; i++) {
			let keyRes = this.alpha[Math.floor(Math.random() * this.alpha.length)]

			this.keyCode += keyRes;
			this.keyArray.push(keyRes);
		}

		return this.keyCode;
	}

	renderCanvas() {
		var canvas = document.getElementById('canvas-captcha'),
    	ctx = canvas.getContext('2d');

		ctx.fillStyle = "rgba(0, 0, 200, 0)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#fff';
		ctx.font = "24px Arial";

		for(let i = 0; i < this.keyArray.length; i++) {
			var size = ctx.measureText(this.keyArray[i]);

    		ctx.save();
			var tx = (i * 50) + (size.width / 2);
			var ty = (30);

			ctx.translate(tx, ty);

			if(i === 0) {
				ctx.rotate(6.67500);
				ctx.translate(0, -ty);
			} else {
				ctx.rotate(Math.sin(90 * Math.PI / (Math.random() * 120)));
				ctx.translate(-tx, -ty);
			}

			ctx.fillText(this.keyArray[i], tx, 25);
			ctx.restore();
		}
	}

	clearCanvas() {
		var canvas = document.getElementById('canvas-captcha'),
    	ctx = canvas.getContext('2d');

		ctx.save();

		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.restore();
	}

	get init() {
		return new Promise((resolve, reject) => {
			resolve(this.generateCode());
		});
	}

	refresh() {
		this.keyCode = '';
		this.keyArray = [];
		this.clearCanvas();
		this.init;
		this.renderCanvas();
	}

	checkKey(code) {
		if(code === this.keyCode) {
			this.keyCode = '';
			this.keyArray = [];
			this.clearCanvas();

			return true;
		} else {
			return false;
		}
	}
}

export default captcha;
