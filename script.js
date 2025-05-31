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
    }
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

    // 図の更新（実際の図は後で追加）
    document.getElementById('diagramImage').textContent = menu.diagram;

    // 目的の更新
    document.getElementById('purposeText').textContent = menu.purpose;

    // 指導ポイントの更新
    const coachingPointsList = document.getElementById('coachingPoints');
    coachingPointsList.innerHTML = menu.coachingPoints.map(point => `<li>${point}</li>`).join('');
}

// ページ読み込み時に実行
if (window.location.pathname.includes('detail.html')) {
    window.addEventListener('DOMContentLoaded', updateDetailPage);
} 