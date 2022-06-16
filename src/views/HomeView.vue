<script setup lang="ts">
	import { ref, onMounted } from "vue";
	let textDisplay = null;
	// const phrases = [
	//   "Wake up, Neo... ",
	//   "The Matrix has you... ",
	//   "Follow the white rabbit. ",
	//   "Knock, knock, Neo. ",
	// ];
	const questions = ref([
		{
			about: [
				"Who are you",
				"Who are you?",
				"Who r u",
				"Who r u?",
				"Introduce yourself",
				"Introduce yourself?",
			],
		},
	]);

	const answers = ref(["Bayram KELEŞ", "Frontend Developer in VueJS"]);

	// let i = 0;
	let j = 0;
	let currentPhrase = [];
	let isDeleting = false;
	let isEnd = false;
	console.log("questions ", questions.value[0].about);
	function loop(newQuestion: any) {
		console.log("newQuestion[j]", newQuestion.value);
		for (let i = 0; i < questions.value.length; i++) {
			if (newQuestion === questions.value[i]) {
				console.log("Element Found");
			}
		}
		// textDisplay.innerHTML = currentPhrase.join("");

		// currentPhrase.push(question[j]);
		// j++;
		// textDisplay.innerHTML = currentPhrase.join("");

		// if (isDeleting && j <= phrases[i].length) {
		//   currentPhrase.pop(phrases[i][j]);
		//   j--;
		//   textDisplay.innerHTML = currentPhrase.join("");
		// }

		// if (j == phrases[i].length) {
		//   isEnd = true;
		//   isDeleting = true;
		// }

		// if (isDeleting && j === 0) {
		//   currentPhrase = [];
		//   isDeleting = false;
		//   i++;
		//   if (i == phrases.length) {
		//     i = 0;
		//   }
		// }
		// const spedUp = Math.random() * (80 - 50) + 50;
		// const normalSpeed = Math.random() * (150 - 100) + 100;
		// const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

		// setTimeout(loop, time);
	}
	// function loop() {
	//   isEnd = false;
	//   textDisplay.innerHTML = currentPhrase.join("");

	//   if (i < phrases.length) {
	//     if (!isDeleting && j <= phrases[i].length) {
	//       currentPhrase.push(phrases[i][j]);
	//       j++;
	//       textDisplay.innerHTML = currentPhrase.join("");
	//     }

	//     if (isDeleting && j <= phrases[i].length) {
	//       currentPhrase.pop(phrases[i][j]);
	//       j--;
	//       textDisplay.innerHTML = currentPhrase.join("");
	//     }

	//     if (j == phrases[i].length) {
	//       isEnd = true;
	//       isDeleting = true;
	//     }

	//     if (isDeleting && j === 0) {
	//       currentPhrase = [];
	//       isDeleting = false;
	//       i++;
	//       if (i == phrases.length) {
	//         i = 0;
	//       }
	//     }
	//   }
	//   const spedUp = Math.random() * (80 - 50) + 50;
	//   const normalSpeed = Math.random() * (150 - 100) + 100;
	//   const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

	//   setTimeout(loop, time);
	// }
	onMounted(() => {
		textDisplay = document.getElementById("text");
		// loop();
	});
	// let start = false;
	// if (start === true) {
	//   loop();
	// }

	//! DATA
	const newQuestion = ref("");
	const question = ref("");
	//! METHODS
	const askQuestion = function () {
		if (newQuestion.value.trim().length !== 0) {
			question.value = newQuestion.value;
			loop(newQuestion);
			newQuestion.value = "";
		}
		return;
	};
</script>

<template>
	<div class="text p-20 h-full flex flex-col justify-between">
		<div class="text flex text-4xl">
			<h1 id="text"></h1>
			<span class="blink_me">|</span>
		</div>
		<div class="relative text-4xl">
			<div class="px-4">
				{{ question }}
			</div>
			<div class="mt-4">
				<div class="text absolute left-2">&gt;</div>
				<input
					v-model="newQuestion"
					@keyup.enter="askQuestion"
					type="text"
					class="text bg-black w-full outline-none px-8"
				/>
			</div>
		</div>
	</div>
</template>
<style>
	.text {
		font-family: "VT323";
		color: rgb(177, 253, 0);
		text-shadow: 1px 1px 1px rgb(226, 255, 183),
			0 0 0.1em rgb(226, 255, 183), 0 0 0.2em green;
	}
	.blink_me {
		animation: blinker 1s linear infinite;
	}
	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}
</style>
