new Vue({
	el:'#app',
	data: {
		playerName: 'You',
		monsterName: 'Monster',
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function() {

			this.damageAttack(10, 3);

			if (this.monsterHealth <= 0) {
				alert('You Won!');
				return this.newGame();
			}

			this.monsterAttack();

		},
		specialAttack: function() {

			this.damageAttack(20, 10);

			if (this.monsterHealth <= 0) {
				alert('You Won!');
				return this.newGame();
			}

			this.monsterAttack();

		},
		heal: function() {

			if (this.playerHealth < 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}

			this.turns.unshift({
					isPlaying: true,
					text: this.playerName + " Heals for 10" 
				});

			this.monsterAttack();

		},
		giveUp: function() {

			this.newGame();

		},
		damageAttack: function(max, min) {
			var damage = Math.max(Math.floor((Math.random() * max) + 1), min);
			this.monsterHealth -= damage;

			this.turns.unshift({
				isPlaying: true,
				text: this.playerName + " Hits " + this.monsterName + " for " + damage
			});


		},
		monsterAttack: function() {
			var damage = Math.max(Math.floor((Math.random() * 12) + 1), 5);
			this.playerHealth -= damage;

			this.turns.unshift({
				isPlaying: false,
				text: this.monsterName + " Hits " + this.playerName + " for " + damage
			});

			if (this.playerHealth <= 0) {
				alert('You Lost!');
				this.newGame();			
			}
		},
		newGame: function() {
			this.gameIsRunning = false;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		}
	}

});