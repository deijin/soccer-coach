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

// 編集可能な要素の設定
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        // 編集ボタンの作成
        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerHTML = '✎ 編集';
        element.parentNode.insertBefore(editButton, element.nextSibling);

        // 編集ボタンのクリックイベント
        editButton.addEventListener('click', () => {
            if (element.isContentEditable) {
                // 編集モードの終了
                element.contentEditable = false;
                editButton.innerHTML = '✎ 編集';
                editButton.classList.remove('editing');
                
                // ローカルストレージに保存
                const pageId = window.location.search.split('=')[1];
                const elementId = element.getAttribute('id');
                const storageKey = `${pageId}_${elementId}`;
                localStorage.setItem(storageKey, element.innerHTML);
            } else {
                // 編集モードの開始
                element.contentEditable = true;
                editButton.innerHTML = '✓ 保存';
                editButton.classList.add('editing');
                element.focus();
            }
        });

        // 保存された内容の読み込み
        const pageId = window.location.search.split('=')[1];
        const elementId = element.getAttribute('id');
        const storageKey = `${pageId}_${elementId}`;
        const savedContent = localStorage.getItem(storageKey);
        if (savedContent) {
            element.innerHTML = savedContent;
        }
    });
}

// 詳細ページの内容を更新
function updateDetailPage() {
    const menuId = getMenuIdFromUrl();
    if (!menuId || !trainingMenus[menuId]) return;

    const menu = trainingMenus[menuId];

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

    // 編集可能にする
    makeEditable();
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

// ページ読み込み時に実行
if (window.location.pathname.includes('detail.html')) {
    window.addEventListener('DOMContentLoaded', updateDetailPage);
} 