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
        diagram: '図の説明をここに追加',
        purpose: 'ボールコントロール能力の向上と、ドリブルの基本技術の習得を目指します。',
        coachingPoints: [
            'ボールを見すぎないように指導',
            '小さなタッチでボールをコントロール',
            '体を使ってボールを守る姿勢を意識',
        ],
        videoUrl: 'https://www.youtube.com/embed/XXXXX' // 実際の動画IDに置き換え
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
        diagram: '図の説明をここに追加',
        purpose: '正確なパスの技術を身につけ、チームメイトとの連携プレーの基礎を作ります。',
        coachingPoints: [
            '軸足の位置とボールの蹴る位置を確認',
            'パスを出す前に相手の準備ができているか確認',
            'パスの強さをコントロール',
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
        videoUrl: 'https://www.youtube.com/embed/XXXXX'
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
        diagram: '図の説明をここに追加',
        purpose: '1対1の状況での攻防の基本を学びます。',
        coachingPoints: [
            'フェイントの使用を促す',
            '相手との距離感を意識',
            'ボールを奪った後の展開も考える',
        ],
        videoUrl: 'https://www.youtube.com/embed/XXXXX'
    },
    // 他の練習メニューも同様に追加
};

// URLからメニューIDを取得
function getMenuIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('menu');
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
    equipmentList.innerHTML = menu.equipment.map(item => `<li>${item}</li>`).join('');

    // 手順の更新
    const processList = document.getElementById('processList');
    processList.innerHTML = menu.process.map(step => `<li>${step}</li>`).join('');

    // 図の更新
    document.getElementById('diagramImage').textContent = menu.diagram;

    // 目的の更新
    document.getElementById('purposeText').textContent = menu.purpose;

    // 指導ポイントの更新
    const coachingPointsList = document.getElementById('coachingPoints');
    coachingPointsList.innerHTML = menu.coachingPoints.map(point => `<li>${point}</li>`).join('');

    // 動画の更新
    const videoContainer = document.getElementById('videoContainer');
    if (menu.videoUrl) {
        videoContainer.innerHTML = `<iframe src="${menu.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        videoContainer.innerHTML = '<p>この練習メニューの動画はまだありません。</p>';
    }
}

// ページ読み込み時に実行
if (window.location.pathname.includes('detail.html')) {
    window.addEventListener('DOMContentLoaded', updateDetailPage);
} 