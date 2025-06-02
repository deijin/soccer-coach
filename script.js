// 練習メニューのデータ
const trainingMenus = {
    'basic-dribble': {
        title: '基本ドリブル',
        timeRequired: '15分',
        requiredPlayers: '4-8人',
        equipment: [
            'サッカーボール（1人1個）',
            'マーカーコーン 8個',
        ],
        process: [
            'コーンを8メートル間隔で2列に配置',
            '各選手がボールを持って一列に並ぶ',
            'コーンの間をジグザグに進む',
            '最後まで到達したら、外側を走って列の最後尾に並ぶ',
        ],
        diagram: {
            image: 'images/diagrams/basic-dribble.svg',
            description: 'コーンを使用したジグザグドリブル。矢印の方向に進む。'
        },
        purpose: 'ボールコントロール能力の向上と、ドリブルの基本技術の習得を目指します。',
        coachingPoints: [
            'ボールを見すぎないように指導',
            '小さなタッチでボールをコントロール',
            '体を使ってボールを守る姿勢を意識',
        ],
        videoUrls: [
            {
                title: 'ドリブル練習メニュー【サッカー基礎】',
                url: 'https://www.youtube.com/embed/xoJ2d1M9lFc'
            }
        ]
    },
    'passing': {
        title: 'パス練習',
        timeRequired: '20分',
        requiredPlayers: '6-8人',
        equipment: [
            'サッカーボール（2人に1個）',
            'マーカーコーン 4個',
        ],
        process: [
            '2人1組でペアを作る',
            '5メートル間隔で向かい合って立つ',
            'インサイドキックで正確なパスを出し合う',
            '徐々に距離を広げていく',
        ],
        diagram: {
            image: 'images/diagrams/passing.svg',
            description: '2人組でのパス練習。5-10メートルの間隔で向かい合う。'
        },
        purpose: '正確なパスの技術を身につけ、チームメイトとの連携プレーの基礎を作ります。',
        coachingPoints: [
            '軸足の位置とボールの蹴る位置を確認',
            'パスを出す前に相手の準備ができているか確認',
            'パスの強さをコントロール',
        ],
        videoUrls: [
            {
                title: 'パス練習メニュー【サッカー基礎】',
                url: 'https://www.youtube.com/embed/lGcXKrs_KbA'
            }
        ]
    },
    'shooting': {
        title: 'シュート練習',
        timeRequired: '20分',
        requiredPlayers: '6-8人',
        equipment: [
            'サッカーボール（3-4個）',
            'ゴール（またはコーンで代用）',
        ],
        process: [
            'ゴール前に一列に並ぶ',
            '順番にペナルティエリア付近からシュート',
            'シュート後は自分のボールを取りに行き、列の最後尾に並ぶ',
        ],
        diagram: '図の説明をここに追加',
        purpose: '基本的なシュートフォームの習得と、ゴールへの意識付けを行います。',
        coachingPoints: [
            'シュートする際の軸足の位置',
            'インパクトの瞬間のボールを見る位置',
            'フォロースルーの大切さ',
        ],
        videoUrls: [
            {
                title: 'シュート練習メニュー【サッカー基礎】',
                url: 'https://www.youtube.com/embed/ilIlLA-d2YA'
            }
        ]
    },
    'lifting': {
        title: 'リフティング練習',
        timeRequired: '10分',
        requiredPlayers: '1人以上',
        equipment: [
            'サッカーボール（1人1個）',
        ],
        process: [
            'ボールを手で持って構える',
            'ボールを落として膝で1回上げる',
            '徐々に回数を増やしていく',
            '慣れてきたら足も使用する',
        ],
        diagram: '図の説明をここに追加',
        purpose: 'ボールタッチの感覚を養い、ボールコントロール能力を向上させます。',
        coachingPoints: [
            'はじめは1回から始める',
            '膝を柔らかく使う',
            '成功体験を重視する',
        ],
        videoUrls: [
            {
                title: 'リフティング練習【サッカー基礎】',
                url: 'https://www.youtube.com/embed/ujUZ0f-GR-4'
            }
        ]
    },
    'one-vs-one': {
        title: '1vs1練習',
        timeRequired: '20分',
        requiredPlayers: '2人以上',
        equipment: [
            'サッカーボール',
            'コーン 4個',
            'ミニゴール（または2本のポール）',
        ],
        process: [
            '5メートル四方のスペースを作る',
            '1人が攻撃、1人が守備を担当',
            '攻撃側がゴールを決めるか、守備側がボールを奪うまで続ける',
            '役割を交代して繰り返す',
        ],
        diagram: {
            image: 'images/diagrams/one-vs-one.svg',
            description: '5メートル四方のスペースで1対1の攻防を行う。'
        },
        purpose: '1対1の状況での攻防の基本を学びます。',
        coachingPoints: [
            'フェイントの使用を促す',
            '相手との距離感を意識',
            'ボールを奪った後の展開も考える',
        ],
        videoUrls: [
            {
                title: '1対1の極意【ドリブル突破】',
                url: 'https://www.youtube.com/embed/naEccnjzLxM'
            }
        ]
    },
    // 他の練習メニューも同様に追加
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

// 編集モードの切り替え
function toggleEditMode() {
    isEditMode = !isEditMode;
    const editButton = document.getElementById('pageEditButton');
    const editableElements = document.querySelectorAll('.editable');

    if (isEditMode) {
        editButton.innerHTML = '✓ 編集を保存';
        editButton.classList.add('editing');
        editableElements.forEach(element => {
            element.contentEditable = true;
            element.classList.add('editing');
        });
    } else {
        editButton.innerHTML = '✎ ページを編集';
        editButton.classList.remove('editing');
        editableElements.forEach(element => {
            element.contentEditable = false;
            element.classList.remove('editing');
            
            // 変更内容を保存
            const pageId = window.location.search.split('=')[1];
            const elementId = element.getAttribute('id');
            const storageKey = `${pageId}_${elementId}`;
            localStorage.setItem(storageKey, element.innerHTML);
        });
    }
}

// 詳細ページの内容を更新
function updateDetailPage() {
    const menuId = getMenuIdFromUrl();
    let menu;

    // カスタムメニューの場合はローカルストレージから読み込む
    if (menuId.startsWith('custom_')) {
        const menuData = localStorage.getItem(`menu_${menuId}`);
        if (menuData) {
            menu = JSON.parse(menuData);
        }
    } else {
        menu = trainingMenus[menuId];
    }

    if (!menu) return;

    // 編集ボタンの追加
    const titleContainer = document.querySelector('.detail-container');
    const editButton = document.createElement('button');
    editButton.id = 'pageEditButton';
    editButton.className = 'page-edit-button';
    editButton.innerHTML = '✎ ページを編集';
    editButton.onclick = toggleEditMode;
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
    equipmentList.innerHTML = menu.equipment.map(item => `<li class="editable" id="equipment_${menu.equipment.indexOf(item)}">${item}</li>`).join('');

    // 手順の更新
    const processList = document.getElementById('processList');
    processList.innerHTML = menu.process.map(step => `<li class="editable" id="process_${menu.process.indexOf(step)}">${step}</li>`).join('');

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
    document.getElementById('purposeText').innerHTML = `<div class="editable" id="purpose">${menu.purpose}</div>`;

    // 指導ポイントの更新
    const coachingPointsList = document.getElementById('coachingPoints');
    coachingPointsList.innerHTML = menu.coachingPoints.map(point => `<li class="editable" id="coaching_${menu.coachingPoints.indexOf(point)}">${point}</li>`).join('');

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
        timeRequired: '15分',
        requiredPlayers: '4-8人',
        equipment: ['必要な用具を追加'],
        process: ['手順を追加'],
        purpose: '目的を入力',
        coachingPoints: ['指導ポイントを追加'],
        videoUrls: []
    };

    // ローカルストレージにメニューを保存
    const storageKey = `menu_${newId}`;
    localStorage.setItem(storageKey, JSON.stringify(newMenu));

    // カテゴリーとメニューの紐付けを保存
    const categoryMenus = JSON.parse(localStorage.getItem(`category_${categoryId}`) || '[]');
    categoryMenus.push(newId);
    localStorage.setItem(`category_${categoryId}`, JSON.stringify(categoryMenus));

    // 画面に新しいメニューを追加
    const menuGrid = document.querySelector(`#${categoryId} .menu-grid`);
    const menuItem = createMenuItem(newId, newMenu);
    menuGrid.appendChild(menuItem);
}

// メニュー要素の作成
function createMenuItem(menuId, menu) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
        <h3 class="editable" id="title_${menuId}">${menu.title}</h3>
        <p class="time editable" id="time_${menuId}">${menu.timeRequired}</p>
        <button class="delete-menu-button" onclick="deleteMenuItem('${menuId}', this)">🗑️ 削除</button>
    `;
    div.onclick = (e) => {
        if (!e.target.classList.contains('delete-menu-button')) {
            window.location.href = `detail.html?menu=${menuId}`;
        }
    };
    return div;
}

// メニューの削除
function deleteMenuItem(menuId, button) {
    if (confirm('このメニューを削除してもよろしいですか？')) {
        // イベントの伝播を停止
        event.stopPropagation();
        
        // ローカルストレージからメニューを削除
        localStorage.removeItem(`menu_${menuId}`);
        
        // カテゴリーからメニューを削除
        const categoryId = button.closest('.category-section').id;
        const categoryMenus = JSON.parse(localStorage.getItem(`category_${categoryId}`) || '[]');
        const updatedMenus = categoryMenus.filter(id => id !== menuId);
        localStorage.setItem(`category_${categoryId}`, JSON.stringify(updatedMenus));
        
        // 画面から要素を削除
        button.closest('.menu-item').remove();
    }
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

// メニュー項目のクリックイベントを設定
function setupMenuItemClickHandlers() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (!isEditMode && !e.target.classList.contains('delete-menu-button')) {
                const menuId = item.getAttribute('data-menu');
                window.location.href = `pages/detail.html?menu=${menuId}`;
            }
        });
    });
}

// ランディングページの初期化
function initializeLandingPage() {
    const categories = ['individual', 'pair', 'noball'];
    categories.forEach(categoryId => {
        // カテゴリーセクションに追加ボタンを追加
        const section = document.getElementById(categoryId);
        const addButton = document.createElement('button');
        addButton.className = 'add-menu-button';
        addButton.innerHTML = '+ 新しいメニューを追加';
        addButton.onclick = () => addNewMenuItem(categoryId);
        section.querySelector('h2').appendChild(addButton);

        // 保存されているメニューを読み込み
        const categoryMenus = JSON.parse(localStorage.getItem(`category_${categoryId}`) || '[]');
        const menuGrid = section.querySelector('.menu-grid');
        
        categoryMenus.forEach(menuId => {
            const menuData = JSON.parse(localStorage.getItem(`menu_${menuId}`));
            if (menuData) {
                const menuItem = createMenuItem(menuId, menuData);
                menuGrid.appendChild(menuItem);
            }
        });
    });

    // メニュー項目のクリックイベントを設定
    setupMenuItemClickHandlers();
} 