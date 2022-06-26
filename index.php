<!doctype html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="./assets/site.css">
	<title>test</title>
</head>

<body>
	<div class="wrapper">
		<div>
			<header class="header">Онлайн конфигуратор</header>
			<p class="title">ЗАДАЙТЕ ПАРАМЕТРЫ СТЕКЛА</p>
			<hr>
		</div>
		<div class="names">
			<div class="names">
				<div class="lenght">
					<h4 class="lenghtName">Укажите длину</h4>
					<input class="classLenght" type="number" id="lenght" placeholder="Длина | мм">
					<div id="warning" class="warning" style='display: None;'>
						<div class="test"> <span class="warningText"> ⚠️Укажите размеры</span> </div>
					</div>
				</div>

				<div class="width">
					<h4 class="widthName">Укажите ширину</h4>
					<input class="classWidth" type="number" id="width" placeholder="Ширина | мм">
				</div>
			</div>
			<div class="glassForm">
				<h4 class="glassFormName">Форма стекла <img class="hint" id="hint_glass" src="./assets/hint.png" alt=""> </h4>
				<div class="tooltip" id="tooltip_glass" style="display: none; max-width: 250px;">
					<div style="font-size: 12px; font-weight: 500; text-align: initial; color: #617189;">ПРИ ВЫБОРЕ ФОРМЫ КРУГ ИЛИ ОВАЛ:</div>
					<ul style="padding-left: 16px">
						<li>
							<div style="font-size: 12px; text-align: initial; color: #617189;">
								Длина и Ширина у круглой формы совпадают
							</div>
						</li>
						<li>
							<div style="font-size: 12px; text-align: initial; color: #617189;">
								Длина и Ширина у овальной формы различаются
							</div>
						</li>
					</ul>
				</div>

				<div class="v-select" id="selectGlass">
					<div id="select_glass">
						<div id="selectedOptionGlass" class="title"> <img src="./assets/glassForm_cube.png" alt="type">
							<p> Прямоугольник </p>
							<img class="arrow arrow_rotate" src="./assets/arrow.png" alt="arrow">
						</div>
					</div>

				</div>

			</div>

			<div class="processingType">
				<h4 class="processingTypeName">Вид обработки <img class="hint" id="hint_proc" src="./assets/hint.png" alt=""></h4>
				<div class="tooltip" id="tooltip_proc" style="display: none;">
					<div>
						<div style="font-size: 12px; font-weight:500; text-align: initial; color: #617189;">ПРИ ВЫБОРЕ МЕТОДА ОБРАБОТКИ КРОМКИ:</div>
						<ul style="padding-left: 16px">
							<li>
								<div style="text-decoration: underline; font-size: 12px; text-align: initial; color: #617189;">
									<span style="text-decoration: underline; font-size: 12px; font-weight:500; text-align: initial; color: #617189;">
										Без обработки</span> — голый рез, можно порезать руки
								</div>
							</li>
							<li>
								<div style="text-decoration: underline; font-size: 12px; text-align: initial; color: #617189;">
									<span style="text-decoration: underline; font-size: 12px; font-weight:500; text-align: initial; color: #617189;">
										Шлифовка</span> – сняты фаски, матовый торец стекла

								</div>
							</li>
							<li>
								<div style="text-decoration: underline; font-size: 12px; text-align: initial; color: #617189;">
									<span style="text-decoration: underline; font-size: 12px; font-weight:500; text-align: initial; color: #617189;">
										Полировка</span> – сняты фаски, глянцевый торец стекла
								</div>
							</li>
							<div>
								<a href="#">
									<p style="text-decoration: underline; font-size: 12px; text-align: end; color: #617189;">
										Подробнее об услуге
									</p>
								</a>
							</div>
						</ul>
					</div>
				</div>

				<div class="v-select" id="selectProc">
					<div id="select_processing">
						<div id="selectedOptionProc" class="title">
							<img src="./assets/without_processing.png" alt="type">
							<p> Без обработки </p>
							<img class="arrow arrow_rotate" src="./assets/arrow.png" alt="arrow">
						</div>
					</div>

				</div>

			</div>

			<div class="count">
				<h4 class="countName">Количество</h4>
				<div class="btn-group">
					<button id="minus"><span style="position: relative; left: -3px;">—</span></button>
					<button class="count" id="count" disabled>1</button>
					<button id="plus">+</button>
				</div>
			</div>

			<div class="sum">
				<h4 class="sumName">Сумма</h4>
				<div class="flex">
					<div id="sumNumber" class="sumNumber">0.000</div>
				</div>
			</div>
			<div id="clear" class="clear">
				<img src="./assets/clear.png" alt="clear">
				</divi>
			</div>
		</div>

		<script src="./assets/jquery.min.js"></script>
		<script src="./assets/main.js"></script>
</body>

</html>