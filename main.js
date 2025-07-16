// --- Roadmap Data Structure ---
const roadmap = [
  {
    level: 'Beginner',
    topics: [
      {
        title: 'C++',
        description: 'A powerful language for game engines and performance-critical code.',
        links: [
          'https://learncpp.com/',
          'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
        ],
      },
      {
        title: 'C#',
        description: 'The main language for Unity game development.',
        links: [
          'https://learn.microsoft.com/en-us/dotnet/csharp/',
          'https://www.youtube.com/watch?v=GhQdlIFylQ8',
        ],
      },
      {
        title: 'Java',
        description: 'A popular language for Android games and cross-platform development.',
        links: [
          'https://docs.oracle.com/javase/tutorial/',
          'https://www.youtube.com/watch?v=eIrMbAQSU34',
        ],
      },
      {
        title: 'Python',
        description: 'Great for prototyping, scripting, and learning programming basics.',
        links: [
          'https://docs.python.org/3/tutorial/',
          'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        ],
      },
      {
        title: 'Linear Algebra',
        description: 'Essential math for graphics, physics, and 3D transformations.',
        links: [
          'https://www.khanacademy.org/math/linear-algebra',
        ],
      },
      {
        title: 'Unity',
        description: 'A leading game engine for 2D and 3D games.',
        links: [
          'https://learn.unity.com/',
          'https://www.youtube.com/watch?v=gB1F9G0JXOo',
        ],
      },
      {
        title: '2D Game Dev',
        description: 'Learn the basics of 2D game development.',
        links: [
          'https://learn.unity.com/',
          'https://www.youtube.com/watch?v=5pXG6BOEblM',
        ],
      },
      {
        title: 'Game Loops',
        description: 'The heartbeat of every game, managing updates and rendering.',
        links: [
          'https://gameprogrammingpatterns.com/game-loop.html',
        ],
      },
      {
        title: 'Git',
        description: 'Version control system to manage your game code.',
        links: [
          'https://www.atlassian.com/git/tutorials',
          'https://www.youtube.com/watch?v=RGOj5yH7evk',
        ],
      },
      {
        title: 'Build Settings Unity',
        description: 'How to build and deploy your Unity games.',
        links: [
          'https://docs.unity3d.com/Manual/BuildSettings.html',
          'https://www.youtube.com/watch?v=gZq_F8G4KxY',
        ],
      },
    ],
  },
  {
    level: 'Intermediate',
    topics: [
      {
        title: 'Unreal Engine',
        description: 'A powerful engine for AAA and indie games alike.',
        links: [
          'https://docs.unrealengine.com/',
          'https://www.youtube.com/watch?v=1gKmCzC1bXU',
        ],
      },
      {
        title: 'Godot',
        description: 'A free, open-source game engine for 2D and 3D games.',
        links: [
          'https://docs.godotengine.org/',
          'https://www.youtube.com/watch?v=ycGNF-NnZ88',
        ],
      },
      {
        title: '3D Game Dev',
        description: 'Learn the basics of 3D game development.',
        links: [
          'https://learn.unrealengine.com/',
          'https://www.youtube.com/watch?v=gQmiqmxJMtA',
        ],
      },
      {
        title: 'Animation Techniques',
        description: 'Bring your games to life with animation.',
        links: [
          'https://www.gamedeveloper.com/design/animation-techniques',
        ],
      },
      {
        title: 'Game AI',
        description: 'Make your games smarter with artificial intelligence.',
        links: [
          'https://theory.stanford.edu/~amitp/GameProgramming/',
          'https://www.youtube.com/watch?v=7-5y6U8GtIc',
        ],
      },
      {
        title: 'Multiplayer Networking',
        description: 'Learn the basics of networking for multiplayer games.',
        links: [
          'https://www.youtube.com/watch?v=aslgfF9AEN0',
        ],
      },
      {
        title: 'PostgreSQL',
        description: 'A powerful open-source database for storing game data.',
        links: [
          'https://www.postgresql.org/docs/',
          'https://www.youtube.com/watch?v=qw--VYLpxG4',
        ],
      },
      {
        title: 'MongoDB',
        description: 'A NoSQL database for flexible data storage.',
        links: [
          'https://www.mongodb.com/docs/',
          'https://www.youtube.com/watch?v=-56x56UppqQ',
        ],
      },
      {
        title: 'Multithreading',
        description: 'Improve performance by running code in parallel.',
        links: [
          'https://www.tutorialspoint.com/java/java_multithreading.htm',
        ],
      },
      {
        title: 'AWS GameLift',
        description: 'Cloud hosting for multiplayer game servers.',
        links: [
          'https://aws.amazon.com/gamelift/',
        ],
      },
    ],
  },
  {
    level: 'Advanced',
    topics: [
      {
        title: 'Shader Programming Basics',
        description: 'Create custom graphics effects with shaders.',
        links: [
          'https://www.youtube.com/watch?v=Bagk6eK9x0o',
        ],
      },
      {
        title: 'Unity Shader Graph',
        description: 'Visual tool for building shaders in Unity.',
        links: [
          'https://www.youtube.com/watch?v=Gz0h1c5TG7A',
        ],
      },
      {
        title: 'Game Optimization Basics',
        description: 'Make your games run faster and smoother.',
        links: [
          'https://www.youtube.com/watch?v=K0N6Z0aLqdM',
        ],
      },
      {
        title: 'CI/CD for Game Dev',
        description: 'Automate your build and deployment pipeline.',
        links: [
          'https://www.youtube.com/watch?v=1KfyhIt5rEw',
        ],
      },
      {
        title: 'VR Basics in Unity',
        description: 'Get started with Virtual Reality game development.',
        links: [
          'https://www.youtube.com/watch?v=PNtG98GZnuU',
        ],
      },
      {
        title: 'AR Foundation Unity',
        description: 'Build Augmented Reality games in Unity.',
        links: [
          'https://www.youtube.com/watch?v=wCRkGj1wnaA',
        ],
      },
      {
        title: 'IAP in Unity',
        description: 'Integrate in-app purchases in your Unity games.',
        links: [
          'https://www.youtube.com/watch?v=t0kACis_dJE',
        ],
      },
      {
        title: 'Google Play Store Publishing',
        description: 'Publish your games to the Google Play Store.',
        links: [
          'https://www.youtube.com/watch?v=0IRJj1UqEMQ',
        ],
      },
      {
        title: 'Game Server Monitoring',
        description: 'Monitor your game servers for performance and reliability.',
        links: [
          'https://www.youtube.com/watch?v=AHpG7S-8h8A',
        ],
      },
      {
        title: 'Clean Code in Unity',
        description: 'Write maintainable and clean code in Unity projects.',
        links: [
          'https://www.youtube.com/watch?v=NFHhK1vY_zM',
        ],
      },
    ],
  },
];

// --- State Management ---
let checkedState = JSON.parse(localStorage.getItem('roadmapChecked') || '{}');

function saveState() {
  localStorage.setItem('roadmapChecked', JSON.stringify(checkedState));
}

// --- XP/Level System ---
const XP_PER_TOPIC = 10;
const LEVEL_XP = [0, 100, 250, 500, 1000]; // XP required for each level (Level 1, 2, ...)
let currentXP = 0;
let currentLevel = 1;

function calculateXP() {
  let xp = 0;
  roadmap.forEach((levelObj, levelIdx) => {
    levelObj.topics.forEach((_, topicIdx) => {
      if (isChecked(levelIdx, topicIdx)) xp += XP_PER_TOPIC;
    });
  });
  return xp;
}

function getLevel(xp) {
  for (let i = LEVEL_XP.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_XP[i]) return i + 1;
  }
  return 1;
}

function updateXPBar() {
  currentXP = calculateXP();
  currentLevel = getLevel(currentXP);
  let nextLevelXP = LEVEL_XP[currentLevel] || (LEVEL_XP[LEVEL_XP.length-1] + 250);
  let prevLevelXP = LEVEL_XP[currentLevel-1] || 0;
  let percent = Math.min(100, Math.round(((currentXP - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100));
  document.getElementById('xp-bar-fill').style.width = percent + '%';
  document.getElementById('xp-bar-label').textContent = `Level ${currentLevel} - ${currentXP} XP`;
}

// --- Confetti Animation ---
function showConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = `hsl(${Math.random()*360},100%,60%)`;
    piece.style.animationDelay = (Math.random() * 0.7) + 's';
    confetti.appendChild(piece);
  }
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 2000);
}

// --- Render Functions (update for XP/level) ---
function renderLevels() {
  const levelsContainer = document.getElementById('levels');
  levelsContainer.innerHTML = '';
  roadmap.forEach((levelObj, levelIdx) => {
    const section = document.createElement('section');
    section.className = 'level-section' + (isLevelCompleted(levelIdx) ? ' completed' : '');
    section.innerHTML = `
      <h2>${levelObj.level}</h2>
      <div class="level-progress-bar" id="level-progress-bar-${levelIdx}">
        <span class="level-progress-label" id="level-progress-label-${levelIdx}">0%</span>
      </div>
      <ul class="topics-list">
        ${levelObj.topics.map((topic, topicIdx) => `
          <li class="topic-item${isChecked(levelIdx, topicIdx) ? ' checked' : ''}" data-level="${levelIdx}" data-topic="${topicIdx}">
            <input type="checkbox" class="topic-checkbox" id="checkbox-${levelIdx}-${topicIdx}" ${isChecked(levelIdx, topicIdx) ? 'checked' : ''}>
            <span class="topic-title">${topic.title}</span>
            <span class="topic-search" title="Search on YouTube">🔍</span>
          </li>
        `).join('')}
      </ul>
    `;
    levelsContainer.appendChild(section);
  });
}
function isLevelCompleted(levelIdx) {
  return roadmap[levelIdx].topics.every((_, topicIdx) => isChecked(levelIdx, topicIdx));
}

function isChecked(levelIdx, topicIdx) {
  return checkedState[`${levelIdx}-${topicIdx}`] === true;
}

function updateProgress() {
  let total = 0, completed = 0;
  roadmap.forEach((levelObj, levelIdx) => {
    const topics = levelObj.topics;
    const levelTotal = topics.length;
    let levelCompleted = 0;
    topics.forEach((_, topicIdx) => {
      total++;
      if (isChecked(levelIdx, topicIdx)) levelCompleted++;
    });
    completed += levelCompleted;
    // Update level progress bar
    const percent = Math.round((levelCompleted / levelTotal) * 100);
    const bar = document.getElementById(`level-progress-bar-${levelIdx}`);
    const label = document.getElementById(`level-progress-label-${levelIdx}`);
    if (bar) bar.style.setProperty('--progress', percent);
    if (bar) bar.querySelector('::before');
    if (label) label.textContent = percent + '%';
    // Animate bar
    if (bar) bar.style.setProperty('--bar-width', percent + '%');
    if (bar) bar.style.setProperty('position', 'relative');
    if (bar) bar.style.setProperty('overflow', 'hidden');
    if (bar) bar.style.setProperty('background', '#2a2f4a');
    if (bar) bar.style.setProperty('border-radius', '20px');
    if (bar) bar.style.setProperty('height', '18px');
    if (bar) bar.style.setProperty('width', '100%');
    if (bar) bar.style.setProperty('margin-bottom', '1.2em');
    if (bar) bar.style.setProperty('transition', 'width 0.5s cubic-bezier(.4,2,.6,1)');
    if (bar) bar.style.background = `linear-gradient(90deg, #ffb400 ${percent}%, #7fd7ff)`;
  });
  // Update overall progress
  const overallPercent = Math.round((completed / total) * 100);
  const overallBar = document.getElementById('overall-progress-bar');
  const overallLabel = document.getElementById('overall-progress-label');
  if (overallBar) overallBar.style.background = `linear-gradient(90deg, #7fd7ff ${overallPercent}%, #ffb400)`;
  if (overallLabel) overallLabel.textContent = overallPercent + '%';
  // Motivational messages
  const msg = document.getElementById('motivation-message');
  if (msg) {
    if (overallPercent === 0) msg.textContent = 'Let the quest begin, Aman!';
    else if (overallPercent < 30) msg.textContent = `Great start Aman! ${overallPercent}% complete — keep going!`;
    else if (overallPercent < 50) msg.textContent = `Awesome! ${overallPercent}% done. You’re gaining XP!`;
    else if (overallPercent < 100) msg.textContent = `Level up! ${overallPercent}% — You’re a true Game Dev adventurer!`;
    else msg.textContent = '🏆 100% Complete! You are a Game Dev Master!';
  }
  // Level up messages
  roadmap.forEach((levelObj, levelIdx) => {
    const topics = levelObj.topics;
    const levelTotal = topics.length;
    let levelCompleted = 0;
    topics.forEach((_, topicIdx) => {
      if (isChecked(levelIdx, topicIdx)) levelCompleted++;
    });
    if (levelCompleted === levelTotal) {
      const bar = document.getElementById(`level-progress-bar-${levelIdx}`);
      if (bar) bar.style.boxShadow = '0 0 16px #ffb40088';
      const label = document.getElementById(`level-progress-label-${levelIdx}`);
      if (label) label.textContent += ' 🎉';
    }
  });
}

// --- Sidebar Navigation ---
let sidebarLevel = 0, sidebarTopic = 0;
function openSidebar(levelIdx, topicIdx) {
  sidebarLevel = parseInt(levelIdx);
  sidebarTopic = parseInt(topicIdx);
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const topic = roadmap[sidebarLevel].topics[sidebarTopic];
  const content = document.getElementById('sidebar-content');
  content.innerHTML = `
    <h3>${topic.title}</h3>
    <p>${topic.description}</p>
    <ul>
      ${topic.links.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('')}
    </ul>
    <button class="yt-search-btn">Search on YouTube</button>
  `;
  sidebar.classList.add('open');
  backdrop.style.display = 'block';
  content.querySelector('.yt-search-btn').onclick = () => {
    window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent(topic.title), '_blank');
  };
  updateSidebarNav();
}
function updateSidebarNav() {
  document.getElementById('sidebar-prev').disabled = (sidebarLevel === 0 && sidebarTopic === 0);
  document.getElementById('sidebar-next').disabled = (sidebarLevel === roadmap.length-1 && sidebarTopic === roadmap[sidebarLevel].topics.length-1);
}
document.getElementById('sidebar-prev').onclick = function() {
  if (sidebarTopic > 0) sidebarTopic--;
  else if (sidebarLevel > 0) { sidebarLevel--; sidebarTopic = roadmap[sidebarLevel].topics.length-1; }
  openSidebar(sidebarLevel, sidebarTopic);
};
document.getElementById('sidebar-next').onclick = function() {
  if (sidebarTopic < roadmap[sidebarLevel].topics.length-1) sidebarTopic++;
  else if (sidebarLevel < roadmap.length-1) { sidebarLevel++; sidebarTopic = 0; }
  openSidebar(sidebarLevel, sidebarTopic);
};

// --- Event Handlers (update for XP/confetti) ---
function setupEvents() {
  document.getElementById('levels').addEventListener('click', function(e) {
    const item = e.target.closest('.topic-item');
    if (!item) return;
    const levelIdx = item.getAttribute('data-level');
    const topicIdx = item.getAttribute('data-topic');
    // Checkbox click
    if (e.target.classList.contains('topic-checkbox')) {
      const wasLevelComplete = isLevelCompleted(levelIdx);
      checkedState[`${levelIdx}-${topicIdx}`] = e.target.checked;
      saveState();
      renderLevels();
      setupEvents();
      updateProgress();
      updateXPBar();
      // Confetti on level up
      if (!wasLevelComplete && isLevelCompleted(levelIdx)) showConfetti();
      return;
    }
    // Search icon click
    if (e.target.classList.contains('topic-search')) {
      const topic = roadmap[levelIdx].topics[topicIdx];
      window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent(topic.title), '_blank');
      return;
    }
    // Topic click (open sidebar)
    openSidebar(levelIdx, topicIdx);
  });
  // Sidebar close
  document.getElementById('close-sidebar').onclick = closeSidebar;
  document.getElementById('sidebar-backdrop').onclick = closeSidebar;
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-backdrop').style.display = 'none';
}

// --- Welcome Overlay Logic ---
document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('welcome-overlay');
  const btn = document.getElementById('start-roadmap-btn');
  if (overlay && btn) {
    btn.onclick = function() {
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.style.display = 'none', 500);
    };
  }
});

// --- Initial Render ---
renderLevels();
setupEvents();
updateProgress();
updateXPBar();

// --- Dashboard Toggle for Mobile ---
const dashboardToggle = document.getElementById('dashboard-toggle');
const dashboard = document.getElementById('dashboard');
if (dashboardToggle && dashboard) {
  dashboardToggle.onclick = function() {
    dashboard.classList.toggle('open');
  };
  // Close dashboard when clicking outside (mobile only)
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 900 && dashboard.classList.contains('open')) {
      if (!dashboard.contains(e.target) && e.target !== dashboardToggle) {
        dashboard.classList.remove('open');
      }
    }
  });
}
