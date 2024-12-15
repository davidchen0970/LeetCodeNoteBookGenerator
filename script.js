let solutionCount = 0;

function addSolution() {
    solutionCount++;
    const container = document.getElementById('solutionContainer');

    const solutionBlock = document.createElement('div');
    solutionBlock.className = 'solution-block  mb-3';

    const solutionTitle = document.createElement('div');
    solutionTitle.className = 'section-title form-label';
    solutionTitle.innerText = `解法說明 ${solutionCount}`;
    solutionBlock.appendChild(solutionTitle);

    const solutionTextarea = document.createElement('textarea');
    solutionTextarea.id = `solution${solutionCount}`;
    solutionTextarea.className = `form-control`;
    solutionTextarea.rows = '3';
    solutionTextarea.placeholder = `請輸入解法 ${solutionCount} 的說明`;
    solutionBlock.appendChild(solutionTextarea);

    const timeComplexityTitle = document.createElement('div');
    timeComplexityTitle.className = 'section-title form-label';
    timeComplexityTitle.innerText = `時間複雜度 ${solutionCount}`;
    solutionBlock.appendChild(timeComplexityTitle);

    const timeComplexityInput = document.createElement('input');
    timeComplexityInput.type = 'text';
    timeComplexityInput.className = `form-control`;
    timeComplexityInput.id = `timeComplexity${solutionCount}`;
    timeComplexityInput.placeholder = `時間複雜度（如：O(n log n)）`;
    solutionBlock.appendChild(timeComplexityInput);

    const spaceComplexityTitle = document.createElement('div');
    spaceComplexityTitle.className = 'section-title form-label';
    spaceComplexityTitle.innerText = `空間複雜度 ${solutionCount}`;
    solutionBlock.appendChild(spaceComplexityTitle);

    const spaceComplexityInput = document.createElement('input');
    spaceComplexityInput.type = 'text';
    spaceComplexityInput.className = `form-control`;
    spaceComplexityInput.id = `spaceComplexity${solutionCount}`;
    spaceComplexityInput.placeholder = `空間複雜度（如：O(n)）`;
    solutionBlock.appendChild(spaceComplexityInput);

    const codeTitle = document.createElement('div');
    codeTitle.className = 'section-title form-label';
    codeTitle.innerText = `程式碼 ${solutionCount}`;
    solutionBlock.appendChild(codeTitle);

    const codeTextarea = document.createElement('textarea');
    codeTextarea.id = `code${solutionCount}`;
    codeTextarea.className = `form-control`;
    codeTextarea.rows = '10';
    codeTextarea.placeholder = `解法 ${solutionCount} 的程式碼`;
    solutionBlock.appendChild(codeTextarea);

    container.appendChild(solutionBlock);
}

function generate() {
    const colorList = ['#00AF9B', '#FFB800','#FF375F'];
    const title = document.getElementById('problemTitle').value;
    const link = document.getElementById('problemLink').value;
    const difficulty = document.getElementById('difficulty').value;
    const acceptanceRate = document.getElementById('acceptanceRate').value;
    const constraints = document.getElementById('constraints').value.split('\n').map(item => `<li>${item}</li>`).join('\n');
    var color = '';
    if(difficulty == 'Easy') color = colorList[0];
    else if (difficulty == 'Medium') color = colorList[1];
    else if (difficulty == 'Hard') color = colorList[2];

    let solutions = '';
    for (let i = 1; i <= solutionCount; i++) {
        const solution = document.getElementById(`solution${i}`).value;
        const timeComplexity = document.getElementById(`timeComplexity${i}`).value;
        const spaceComplexity = document.getElementById(`spaceComplexity${i}`).value;
        const code = document.getElementById(`code${i}`).value;
        solutions += `


### 解法 ${i}
${solution}

- 時間複雜度: ${timeComplexity}
- 空間複雜度: ${spaceComplexity}

\`\`\`cpp!=
${code}
\`\`\`
`;
    }

    const output = `
# ${title}
[${title}](${link}) (<font color=${color}> ${difficulty}</font> 通過率: ${acceptanceRate})



## 限制條件
<ul>
${constraints}
</ul>

${solutions}`;

    document.getElementById('output').innerHTML = output;
}

function copyToClipboard() {
    const textToCopy = document.getElementById('output').innerHTML;

    const tempElement = document.createElement('textarea');
    tempElement.innerHTML = textToCopy;
    const decodedText = tempElement.value; 

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = decodedText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Markdown 已成功複製到剪貼簿！');
}
