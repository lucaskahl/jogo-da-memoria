function createMemoryCard(type, image) {
  if (type == "back") {
    const $memoryCard = `
      <article class="memory-card">
        <img
          src="./img/icon-collabcode.svg"
          alt="Gueio icon"
          class="icon"
          onClick="handleClick()"
        />
      </article>
    `;
    return $memoryCard;
  } else if (type == "front") {
    const $memoryCard = `
      <article class="memory-card -front">
        <img
          src="./img/${image}"
          alt="Icon"
          class="icon"
          onClick="handleClick()"
        />
      </article>
    `;
    return $memoryCard;
  }
}

function handleClick() {
  console.log(this);
}
