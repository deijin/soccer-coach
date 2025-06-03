// 練習メニューのデータ
const trainingMenus = {
    // 個人練習メニュー
    'basic-ball-control': {
        title: 'ボールフィーリング',
        description: 'ボールに慣れる基本練習',
        timeRequired: '15分',
        requiredPlayers: '1人以上',
        equipment: [
            'サッカーボール（1人1個）',
            'マーカーコーン 4個'
        ],
        process: [
            '両足の内側でボールを転がす',
            'ボールを足の裏で前後に転がす',
            '足の外側でボールを転がす',
            '各動作を30秒ずつ繰り返す'
        ],
        diagram: {
            image: 'images/diagrams/ball-control.svg',
            description: '2m四方のスペースで1人ずつボールを扱う'
        },
        purpose: '基本的なボールタッチ感覚を養い、ボールをコントロールする自信をつけます。',
        coachingPoints: [
            'ボールを優しくタッチする',
            '急がずゆっくり行う',
            '上手くできたら褒める'
        ],
        videoUrls: []
    },
    'simple-dribble': {
        title: 'まっすぐドリブル',
        description: '直線的なドリブル練習',
        timeRequired: '15分',
        requiredPlayers: '2人以上',
        equipment: [
            'サッカーボール（1人1個）',
            'マーカーコーン 8個'
        ],
        process: [
            'コーンを10メートル間隔で2個設置',
            '1人ずつボールを持って一列に並ぶ',
            'まっすぐドリブルで往復',
            '戻ってきたら次の人がスタート'
        ],
        diagram: {
            image: 'images/diagrams/straight-dribble.svg',
            description: '10メートルの直線コースを往復'
        },
        purpose: 'ボールを見ながら真っ直ぐ進む基本的なドリブル技術を身につけます。',
        coachingPoints: [
            'ボールを優しく触る',
            '小さなタッチで進む',
            'ゆっくりでも良いので正確に'
        ],
        videoUrls: []
    },
    'stop-and-turn': {
        title: 'ストップ＆ターン',
        description: 'ボールを止めて方向転換',
        timeRequired: '15分',
        requiredPlayers: '2人以上',
        equipment: [
            'サッカーボール（1人1個）',
            'マーカーコーン 4個'
        ],
        process: [
            '5メートル四方のスペースを作る',
            'ドリブルで進み、合図でストップ',
            'ボールを止めて後ろを向く',
            '反対方向にドリブルで進む'
        ],
        diagram: {
            image: 'images/diagrams/stop-turn.svg',
            description: '5メートル四方のスペースで方向転換'
        },
        purpose: 'ボールを止める技術と、方向を変える基本動作を習得します。',
        coachingPoints: [
            'ボールをしっかり止める',
            'バランスを保って回る',
            '後ろの安全確認をする'
        ],
        videoUrls: []
    },

    // 対人練習メニュー
    'catch-the-ball': {
        title: 'ボール取りゲーム',
        description: '2人組でボール奪い合い',
        timeRequired: '15分',
        requiredPlayers: '4人以上',
        equipment: [
            'サッカーボール（2人に1個）',
            'マーカーコーン 4個',
            'ビブス'
        ],
        process: [
            '2人1組でペアを作る',
            '3メートル四方のスペースで向かい合う',
            '片方がボールを持ち、もう片方が取る',
            '1分ごとに役割を交代'
        ],
        diagram: {
            image: 'images/diagrams/catch-ball.svg',
            description: '2人1組で向かい合ってボール奪い合い'
        },
        purpose: 'ボール保持の感覚と、相手からボールを奪う基本動作を学びます。',
        coachingPoints: [
            '相手を観察する',
            '安全に気をつける',
            'フェアプレー精神を育む'
        ],
        videoUrls: []
    },
    'simple-pass': {
        title: '的当てパス',
        description: 'コーンを的にしたパス練習',
        timeRequired: '15分',
        requiredPlayers: '2人以上',
        equipment: [
            'サッカーボール（2人に1個）',
            'マーカーコーン 6個'
        ],
        process: [
            'コーンを三角形に並べて的を作る',
            '5メートル離れた位置から順番にパス',
            'コーンに当たったらポイント獲得',
            '全員で合計点を競う'
        ],
        diagram: {
            image: 'images/diagrams/target-pass.svg',
            description: 'コーンを的にしてパスの練習'
        },
        purpose: '正確なパスの技術を楽しみながら身につけます。',
        coachingPoints: [
            'ボールを見てキックする',
            '蹴る足の向きを意識',
            '楽しみながら集中する'
        ],
        videoUrls: []
    },
    'mini-game': {
        title: '3対3ミニゲーム',
        description: '少人数での実践的な試合',
        timeRequired: '20分',
        requiredPlayers: '6-9人',
        equipment: [
            'サッカーボール',
            'ミニゴール 2個',
            'ビブス 2色'
        ],
        process: [
            '3人対3人のチームを作る',
            '10メートル四方のコートを使用',
            '2分ハーフで交代制',
            '交代の人は審判を担当'
        ],
        diagram: {
            image: 'images/diagrams/mini-game.svg',
            description: '小さなコートでの3対3の試合'
        },
        purpose: '実践的な状況で学んだ技術を使う機会を提供します。',
        coachingPoints: [
            '積極的に動く',
            'チームメイトと協力する',
            '全員が楽しめるように配慮'
        ],
        videoUrls: []
    },

    // ボールなし練習メニュー
    'tag-game': {
        title: '鬼ごっこ',
        description: '動きづくりの基本練習',
        timeRequired: '10分',
        requiredPlayers: '6人以上',
        equipment: [
            'マーカーコーン 4個',
            'ビブス（鬼用）'
        ],
        process: [
            '15メートル四方のスペースを作る',
            '鬼を1-2人決める',
            '制限時間内で逃げ切る',
            '捕まった人も鬼になる'
        ],
        diagram: {
            image: 'images/diagrams/tag-game.svg',
            description: '決められたエリア内での鬼ごっこ'
        },
        purpose: '方向転換や急な動き出しなど、サッカーの基本動作を遊びながら習得します。',
        coachingPoints: [
            '周りをよく見る',
            '素早く方向転換する',
            '安全に気をつける'
        ],
        videoUrls: []
    },
    'ladder-exercise': {
        title: 'はしごトレーニング',
        description: '足さばきの基本練習',
        timeRequired: '10分',
        requiredPlayers: '1人以上',
        equipment: [
            'ラダー（または線を引いて代用）'
        ],
        process: [
            'ラダーを直線に設置',
            '1マスずつ前に進む',
            '横向きでステップ',
            '2人で追いかけっこ'
        ],
        diagram: {
            image: 'images/diagrams/ladder.svg',
            description: 'ラダーを使った足さばき練習'
        },
        purpose: 'リズム感と足さばきの基本を楽しみながら身につけます。',
        coachingPoints: [
            'リズムよく行う',
            '転ばないように注意',
            '徐々にスピードを上げる'
        ],
        videoUrls: []
    },
    'balance-game': {
        title: 'バランスゲーム',
        description: '片足立ちなどのバランス練習',
        timeRequired: '10分',
        requiredPlayers: '2人以上',
        equipment: [
            'マーカーコーン 4個'
        ],
        process: [
            '片足で30秒立つ',
            'じゃんけんして勝った人が動きを決める',
            '負けた人が真似をする',
            '交互に動きを考える'
        ],
        diagram: {
            image: 'images/diagrams/balance.svg',
            description: '様々なバランス運動'
        },
        purpose: '体のバランス感覚を養い、ケガの予防にもつながります。',
        coachingPoints: [
            'ふらつかないように集中',
            '両足均等に練習',
            '楽しみながら行う'
        ],
        videoUrls: []
    }
};

// URLからメニューIDを取得
function getMenuIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('menu');
}

// ローカルストレージから追加の動画を取得
function getCustomVideos(menuId) {
    const customVideos = localStorage.getItem(`customVideos_${menuId}`);
    return customVideos ? JSON.parse(customVideos) : [];
}

// ローカルストレージに追加の動画を保存
function saveCustomVideo(menuId, videoTitle, videoUrl) {
    const customVideos = getCustomVideos(menuId);
    customVideos.push({ title: videoTitle, url: videoUrl });
    localStorage.setItem(`customVideos_${menuId}`, JSON.stringify(customVideos));
}

// 動画URLをYoutube埋め込み用URLに変換
function convertToEmbedUrl(url) {
    // 通常のYoutube URLを埋め込み用URLに変換
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
}

// 編集モードの状態管理
let isEditMode = false;

// 編集モードの切り替え（ランディングページ用）
function toggleLandingEditMode() {
    isEditMode = !isEditMode;
    const editButton = document.getElementById('landingEditButton');
    const editableElements = document.querySelectorAll('.editable');
    const deleteButtons = document.querySelectorAll('.delete-menu-button');

    if (isEditMode) {
        editButton.innerHTML = '✓ 編集を保存';
        editButton.classList.add('editing');
        editableElements.forEach(element => {
            element.contentEditable = true;
            element.classList.add('editing');
        });
        deleteButtons.forEach(button => button.style.display = 'block');
    } else {
        editButton.innerHTML = '✎ メニューを編集';
        editButton.classList.remove('editing');
        editableElements.forEach(element => {
            element.contentEditable = false;
            element.classList.remove('editing');
            
            // 編集内容を保存
            const menuItem = element.closest('.menu-item');
            if (menuItem) {
                const menuId = menuItem.dataset.menu;
                // 標準メニューは編集しない
                if (menuId.startsWith('custom_')) {
                    saveMenuChanges(menuId);
                }
            }
        });
        deleteButtons.forEach(button => button.style.display = 'none');
    }
}

// メニューの変更を保存
function saveMenuChanges(menuId) {
    const menuItem = document.querySelector(`.menu-item[data-menu="${menuId}"]`);
    if (!menuItem) return;

    const title = menuItem.querySelector('h3').textContent;
    const description = menuItem.querySelector('p').textContent;
    const time = menuItem.querySelector('.time').textContent;

    // ローカルストレージから既存のメニューデータを取得
    let savedMenus = JSON.parse(localStorage.getItem('customMenus') || '{}');
    const existingMenu = savedMenus[menuId] || {};
    
    // メニューデータを更新
    savedMenus[menuId] = {
        ...existingMenu,
        title: title,
        description: description,
        timeRequired: time
    };

    // 更新したメニューデータを保存
    localStorage.setItem('customMenus', JSON.stringify(savedMenus));
}

// 詳細ページの内容を更新
function updateDetailPage() {
    const menuId = getMenuIdFromUrl();
    if (!menuId) {
        window.location.href = '../index.html';
        return;
    }

    // 標準メニューとカスタムメニューの両方をチェック
    let menu = trainingMenus[menuId];
    const customMenus = JSON.parse(localStorage.getItem('customMenus') || '{}');
    
    if (!menu && customMenus[menuId]) {
        menu = customMenus[menuId];
    }

    if (!menu) {
        window.location.href = '../index.html';
        return;
    }

    // 編集ボタンの追加
    const titleContainer = document.querySelector('.detail-container');
    const editButton = document.createElement('button');
    editButton.id = 'pageEditButton';
    editButton.className = 'page-edit-button';
    editButton.innerHTML = '✎ ページを編集';
    editButton.onclick = toggleDetailEditMode;
    titleContainer.insertBefore(editButton, titleContainer.firstChild);

    // 各セクションに追加ボタンを設置
    const sections = [
        { id: 'equipmentList', type: 'equipment', label: '+ 用具を追加' },
        { id: 'processList', type: 'process', label: '+ 手順を追加' },
        { id: 'coachingPoints', type: 'coaching', label: '+ 指導ポイントを追加' }
    ];

    sections.forEach(section => {
        const container = document.getElementById(section.id).parentElement;
        const addButton = document.createElement('button');
        addButton.className = 'add-item-button';
        addButton.innerHTML = section.label;
        addButton.onclick = () => addListItem(section.id, section.type);
        container.appendChild(addButton);
    });

    // タイトルの更新
    document.getElementById('menuTitle').textContent = menu.title;
    document.getElementById('timeRequired').textContent = menu.timeRequired;
    document.getElementById('requiredPlayers').textContent = menu.requiredPlayers;

    // 用具リストの更新
    const equipmentList = document.getElementById('equipmentList');
    equipmentList.innerHTML = menu.equipment.map(item => 
        `<li class="editable" data-original="${item}">${item}</li>`
    ).join('');

    // 手順の更新
    const processList = document.getElementById('processList');
    processList.innerHTML = menu.process.map(step => 
        `<li class="editable" data-original="${step}">${step}</li>`
    ).join('');

    // 図の更新
    const diagramContainer = document.getElementById('diagramImage');
    if (menu.diagram && menu.diagram.image) {
        diagramContainer.innerHTML = `
            <img src="../${menu.diagram.image}" alt="${menu.title}の配置図" class="diagram-image">
            <p class="diagram-description editable" id="diagram_description">${menu.diagram.description}</p>
        `;
    } else {
        diagramContainer.innerHTML = '<p class="editable" id="diagram_placeholder">この練習メニューの図はまだありません。</p>';
    }

    // 目的の更新
    document.getElementById('purposeText').innerHTML = 
        `<div class="editable" data-original="${menu.purpose}">${menu.purpose}</div>`;

    // 指導ポイントの更新
    const coachingPointsList = document.getElementById('coachingPoints');
    coachingPointsList.innerHTML = menu.coachingPoints.map(point => 
        `<li class="editable" data-original="${point}">${point}</li>`
    ).join('');

    // 動画セクションの更新
    updateVideoSection(menuId, menu);

    // 保存された内容の読み込み
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        const elementId = element.getAttribute('id');
        const storageKey = `${menuId}_${elementId}`;
        const savedContent = localStorage.getItem(storageKey);
        if (savedContent) {
            element.innerHTML = savedContent;
        }
    });
}

// 動画セクションの更新
function updateVideoSection(menuId, menu) {
    const videoSection = document.getElementById('videoContainer');
    const customVideos = getCustomVideos(menuId);
    const allVideos = [...(menu.videoUrls || []), ...customVideos];

    let html = '';
    if (allVideos.length > 0) {
        html += '<div class="video-list">';
        allVideos.forEach((video, index) => {
            html += `
                <div class="video-item">
                    <h3>${video.title}</h3>
                    <div class="video-wrapper">
                        <iframe src="${video.url}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }

    // 動画追加フォームの表示
    html += `
        <div class="add-video-form">
            <h3>参考動画を追加</h3>
            <form id="addVideoForm" onsubmit="return addCustomVideo(event)">
                <div class="form-group">
                    <label for="videoTitle">タイトル:</label>
                    <input type="text" id="videoTitle" required>
                </div>
                <div class="form-group">
                    <label for="videoUrl">Youtube URL:</label>
                    <input type="url" id="videoUrl" required>
                </div>
                <button type="submit">追加</button>
            </form>
        </div>
    `;

    videoSection.innerHTML = html;
}

// カスタム動画の追加
function addCustomVideo(event) {
    event.preventDefault();
    const menuId = getMenuIdFromUrl();
    const titleInput = document.getElementById('videoTitle');
    const urlInput = document.getElementById('videoUrl');

    const videoTitle = titleInput.value;
    const videoUrl = convertToEmbedUrl(urlInput.value);

    saveCustomVideo(menuId, videoTitle, videoUrl);
    
    // フォームをリセット
    titleInput.value = '';
    urlInput.value = '';

    // 動画セクションを更新
    updateVideoSection(menuId, trainingMenus[menuId]);

    return false;
}

// メニュー追加・編集機能
function addNewMenuItem(categoryId) {
    const newId = `custom_${Date.now()}`;
    const newMenu = {
        title: '新しいメニュー',
        description: 'メニューの説明を入力',
        timeRequired: '15分',
        requiredPlayers: '4-8人',
        equipment: ['必要な用具を追加'],
        process: ['手順を追加'],
        purpose: '目的を入力',
        coachingPoints: ['指導ポイントを追加'],
        videoUrls: [],
        isNew: true  // 新規メニューフラグを追加
    };

    // ローカルストレージにメニューを保存
    let savedMenus = JSON.parse(localStorage.getItem('customMenus') || '{}');
    savedMenus[newId] = newMenu;
    localStorage.setItem('customMenus', JSON.stringify(savedMenus));

    // 画面に新しいメニューを追加
    const menuGrid = document.querySelector(`#${categoryId} .menu-grid`);
    const menuItem = createMenuItem(newId, newMenu);
    menuGrid.appendChild(menuItem);

    // 編集モードをオンにする
    if (!isEditMode) {
        toggleLandingEditMode();
    }
}

// メニュー要素の作成（クリックイベントの重複を解消）
function createMenuItem(menuId, menu) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.setAttribute('data-menu', menuId);
    
    // 新規メニューの場合は、デフォルトの内容を表示
    const title = menu.isNew ? '新しいメニュー' : menu.title;
    const description = menu.isNew ? 'メニューの説明を入力' : menu.description;
    const timeRequired = menu.isNew ? '15分' : menu.timeRequired;
    
    div.innerHTML = `
        <h3 class="editable">${title}</h3>
        <p class="editable">${description}</p>
        <span class="time editable">${timeRequired}</span>
        <button class="delete-menu-button" style="display: ${isEditMode ? 'block' : 'none'}">🗑️ 削除</button>
    `;

    // 削除ボタンのイベントリスナー
    const deleteButton = div.querySelector('.delete-menu-button');
    deleteButton.onclick = (e) => {
        e.stopPropagation();
        if (confirm('このメニューを削除してもよろしいですか？')) {
            deleteMenuItem(menuId, div);
        }
    };

    // クリックイベントの設定
    div.onclick = (e) => {
        if (!isEditMode && !e.target.classList.contains('delete-menu-button')) {
            window.location.href = `pages/detail.html?menu=${menuId}`;
        }
    };

    // 編集可能な要素の設定
    const editableElements = div.querySelectorAll('.editable');
    editableElements.forEach(element => {
        if (isEditMode) {
            element.contentEditable = true;
            element.classList.add('editing');
        }
    });

    return div;
}

// メニューの削除
function deleteMenuItem(menuId, element) {
    // ローカルストレージからメニューを削除
    let savedMenus = JSON.parse(localStorage.getItem('customMenus') || '{}');
    delete savedMenus[menuId];
    localStorage.setItem('customMenus', JSON.stringify(savedMenus));
    
    // 画面から要素を削除
    element.remove();
}

// リスト項目の追加機能
function addListItem(listId, type) {
    const list = document.getElementById(listId);
    const newItem = document.createElement('li');
    newItem.className = 'editable editing';
    newItem.id = `${type}_${Date.now()}`;
    newItem.contentEditable = true;
    newItem.textContent = '新しい項目を入力';
    list.appendChild(newItem);
    newItem.focus();
}

// ページ読み込み時の処理を更新
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('detail.html')) {
        updateDetailPage();
    } else {
        // ランディングページの初期化
        initializeLandingPage();
    }
});

// ランディングページの初期化
function initializeLandingPage() {
    // 編集ボタンの追加
    const header = document.querySelector('header');
    const editButton = document.createElement('button');
    editButton.id = 'landingEditButton';
    editButton.className = 'page-edit-button';
    editButton.innerHTML = '✎ メニューを編集';
    editButton.onclick = toggleLandingEditMode;
    header.appendChild(editButton);

    const categories = ['individual', 'pair', 'noball'];
    const categoryMenuMap = {
        'individual': ['basic-ball-control', 'simple-dribble', 'stop-and-turn'],
        'pair': ['catch-the-ball', 'simple-pass', 'mini-game'],
        'noball': ['tag-game', 'ladder-exercise', 'balance-game']
    };

    categories.forEach(categoryId => {
        // カテゴリーセクションに追加ボタンを追加
        const section = document.getElementById(categoryId);
        const addButton = document.createElement('button');
        addButton.className = 'add-menu-button';
        addButton.innerHTML = '+ 新しいメニューを追加';
        addButton.onclick = () => addNewMenuItem(categoryId);
        section.querySelector('h2').appendChild(addButton);

        // メニューグリッドを取得
        const menuGrid = section.querySelector('.menu-grid');
        menuGrid.innerHTML = ''; // 既存のメニューをクリア
        
        // 標準メニューの表示（カテゴリーごとに3つまで）
        const standardMenuIds = categoryMenuMap[categoryId] || [];
        standardMenuIds.forEach(menuId => {
            if (trainingMenus[menuId]) {
                const menuItem = createMenuItem(menuId, trainingMenus[menuId]);
                menuGrid.appendChild(menuItem);
            }
        });

        // カスタムメニューの表示（空きスペースがある場合のみ）
        const customMenus = JSON.parse(localStorage.getItem('customMenus') || '{}');
        const remainingSlots = 3 - standardMenuIds.length;
        
        if (remainingSlots > 0) {
            Object.entries(customMenus)
                .filter(([menuId]) => menuId.startsWith(`custom_${categoryId}`))
                .slice(0, remainingSlots)
                .forEach(([menuId, menu]) => {
                    const menuItem = createMenuItem(menuId, menu);
                    menuGrid.appendChild(menuItem);
                });
        }
    });
}

// AIによる練習メニュー生成
async function generateMenuWithAI(title, description) {
    try {
        const prompt = `
サッカーの練習メニューを作成してください。
タイトル: ${title}
概要: ${description}

以下の形式でJSONを生成してください：
{
    "title": "メニュー名",
    "description": "概要説明",
    "timeRequired": "所要時間",
    "requiredPlayers": "必要な人数",
    "equipment": ["必要な用具1", "必要な用具2"],
    "process": ["手順1", "手順2", "手順3"],
    "purpose": "練習の目的",
    "coachingPoints": ["指導ポイント1", "指導ポイント2"],
    "diagram": {
        "description": "配置図の説明"
    }
}

注意点：
- 低学年向けの安全で分かりやすい内容にしてください
- 時間は15-30分の範囲で設定してください
- 手順は具体的に記述してください
- 指導ポイントは3-5個程度にしてください
`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getOpenAIKey()}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "あなたはサッカーコーチのアシスタントです。低学年向けの練習メニューを作成してください。"
                }, {
                    role: "user",
                    content: prompt
                }],
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error('AI APIの呼び出しに失敗しました');
        }

        const data = await response.json();
        const generatedMenu = JSON.parse(data.choices[0].message.content);
        return generatedMenu;

    } catch (error) {
        console.error('メニュー生成エラー:', error);
        return null;
    }
}

// OpenAI APIキーの取得（実際の実装では環境変数などから安全に取得する必要があります）
function getOpenAIKey() {
    // 注意: 実際の実装では、環境変数やサーバーサイドから安全に取得する必要があります
    const key = localStorage.getItem('openai_api_key');
    if (!key) {
        const newKey = prompt('OpenAI APIキーを入力してください：');
        if (newKey) {
            localStorage.setItem('openai_api_key', newKey);
            return newKey;
        }
        throw new Error('APIキーが設定されていません');
    }
    return key;
}

// 新しいメニューの追加処理を更新
async function addNewMenuItem(categoryId) {
    const title = prompt('新しい練習メニューの名前を入力してください：');
    if (!title) return;

    const description = prompt('練習メニューの概要を入力してください：');
    if (!description) return;

    const newId = `custom_${categoryId}_${Date.now()}`;
    let newMenu;

    try {
        // AIによるメニュー生成を試みる
        const loadingMessage = document.createElement('div');
        loadingMessage.className = 'loading-message';
        loadingMessage.textContent = 'AIがメニューを生成中...';
        document.body.appendChild(loadingMessage);

        newMenu = await generateMenuWithAI(title, description);
        
        document.body.removeChild(loadingMessage);

        if (!newMenu) {
            throw new Error('メニュー生成に失敗しました');
        }
    } catch (error) {
        console.error('AI生成エラー:', error);
        // AIが生成できなかった場合のデフォルト値
        newMenu = {
            title: title,
            description: description,
            timeRequired: '15分',
            requiredPlayers: '4-8人',
            equipment: ['必要な用具を追加'],
            process: ['手順を追加'],
            purpose: '目的を入力',
            coachingPoints: ['指導ポイントを追加'],
            diagram: {
                description: '配置図の説明を入力'
            }
        };
    }

    // ローカルストレージにメニューを保存
    let savedMenus = JSON.parse(localStorage.getItem('customMenus') || '{}');
    savedMenus[newId] = newMenu;
    localStorage.setItem('customMenus', JSON.stringify(savedMenus));

    // メニューグリッドを取得
    const menuGrid = document.querySelector(`#${categoryId} .menu-grid`);
    const existingMenus = menuGrid.children.length;

    // 3つ未満の場合のみ新しいメニューを追加
    if (existingMenus < 3) {
        const menuItem = createMenuItem(newId, newMenu);
        menuGrid.appendChild(menuItem);
    } else {
        alert('このカテゴリーには既に3つのメニューが登録されています。\n既存のメニューを削除してから追加してください。');
    }
}

// 詳細ページの編集モードの切り替え
function toggleDetailEditMode() {
    const editButton = document.getElementById('pageEditButton');
    const editableElements = document.querySelectorAll('.editable');
    const menuId = getMenuIdFromUrl();

    if (editButton.classList.contains('editing')) {
        // 編集モードを終了
        editButton.innerHTML = '✎ ページを編集';
        editButton.classList.remove('editing');
        editableElements.forEach(element => {
            element.contentEditable = false;
            element.classList.remove('editing');
            
            // 変更内容を保存
            if (menuId.startsWith('custom_')) {
                saveDetailPageChanges(menuId);
            }
        });
    } else {
        // 編集モードを開始
        editButton.innerHTML = '✓ 編集を保存';
        editButton.classList.add('editing');
        editableElements.forEach(element => {
            element.contentEditable = true;
            element.classList.add('editing');
        });
    }
}

// 詳細ページの変更を保存
function saveDetailPageChanges(menuId) {
    const customMenus = JSON.parse(localStorage.getItem('customMenus') || '{}');
    const menu = customMenus[menuId];
    if (!menu) return;

    // 各セクションの内容を取得
    menu.title = document.getElementById('menuTitle').textContent;
    menu.timeRequired = document.getElementById('timeRequired').textContent;
    menu.requiredPlayers = document.getElementById('requiredPlayers').textContent;
    menu.equipment = Array.from(document.getElementById('equipmentList').children).map(li => li.textContent);
    menu.process = Array.from(document.getElementById('processList').children).map(li => li.textContent);
    menu.purpose = document.getElementById('purposeText').querySelector('.editable').textContent;
    menu.coachingPoints = Array.from(document.getElementById('coachingPoints').children).map(li => li.textContent);

    // isNewフラグを削除（編集されたため）
    delete menu.isNew;

    // 更新を保存
    customMenus[menuId] = menu;
    localStorage.setItem('customMenus', JSON.stringify(customMenus));
}

// スタイルの追加
const style = document.createElement('style');
style.textContent = `
.loading-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px 40px;
    border-radius: 10px;
    z-index: 1000;
    font-weight: bold;
}
`;
document.head.appendChild(style); 