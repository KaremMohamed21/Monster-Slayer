new Vue({
	el:'#app',
	data: {
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

			this.monsterAttack();

		},
		specialAttack: function() {

			this.damageAttack(10, 3);

			this.monsterAttack();

		},
		heal: function() {
			this.playerHealth += 10;

			this.turns.unshift({
				isPlaying: true,
				text: "You Heal for 10" 
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
				text: "You Hits Monster for " + damage
			});

			if (this.monsterHealth <= 0) {
				alert('You Won!');
				this.newGame();
				return;
			}

		},
		monsterAttack: function() {
			var damage = Math.max(Math.floor((Math.random() * 12) + 1), 5);
			this.playerHealth -= damage;

			this.turns.unshift({
				isPlaying: false,
				text: "Monster Hits You for " + damage
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