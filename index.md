---
layout: default
title: 首页
---

<div class="home">
  <div class="hero-section">
    <h1>📊 金融分析研究室</h1>
    <p class="lead">深度金融分析 · AI与产业研究 · 数据驱动洞察</p>
  </div>

  <div class="intro-section">
    <h2>研究领域</h2>
    <div class="research-areas">
      <div class="area-card">
        <h3>🤖 AI与产业</h3>
        <p>人工智能在各行业的应用分析，关注AI电力、半导体等前沿领域</p>
      </div>
      <div class="area-card">
        <h3>💡 新能源</h3>
        <p>清洁能源转型趋势，光伏、风电、储能产业链深度研究</p>
      </div>
      <div class="area-card">
        <h3>📈 量化分析</h3>
        <p>数据建模与回测，用统计方法揭示市场规律</p>
      </div>
      <div class="area-card">
        <h3>🏢 公司研究</h3>
        <p>基本面分析，财务建模，估值与投资价值评估</p>
      </div>
    </div>
  </div>

  <h2>最新文章</h2>
  
  <div class="post-list">
    {% for post in site.posts limit:10 %}
      <article class="post-item">
        <div class="post-meta">
          <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          {% if post.categories %}
            <span class="post-category">{{ post.categories | join: ', ' }}</span>
          {% endif %}
        </div>
        <h3>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">阅读全文 →</a>
      </article>
    {% endfor %}
  </div>

  {% if site.posts.size > 10 %}
    <p class="text-center">
      <a href="{{ '/archive' | relative_url }}" class="button">查看所有文章</a>
    </p>
  {% endif %}
</div>

<style>
  .hero-section {
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    margin-bottom: 40px;
  }
  
  .hero-section h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }
  
  .lead {
    font-size: 1.2em;
    opacity: 0.95;
  }
  
  .intro-section {
    margin-bottom: 50px;
  }
  
  .research-areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .area-card {
    padding: 25px;
    border: 2px solid #e1e8ed;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .area-card:hover {
    border-color: #667eea;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
    transform: translateY(-5px);
  }
  
  .area-card h3 {
    margin-top: 0;
    color: #333;
  }
  
  .post-list {
    margin-top: 30px;
  }
  
  .post-item {
    padding: 25px 0;
    border-bottom: 1px solid #e1e8ed;
  }
  
  .post-meta {
    font-size: 0.9em;
    color: #657786;
    margin-bottom: 10px;
  }
  
  .post-date {
    margin-right: 15px;
  }
  
  .post-category {
    background: #667eea;
    color: white;
    padding: 2px 10px;
    border-radius: 3px;
    font-size: 0.85em;
  }
  
  .post-item h3 {
    margin: 10px 0;
  }
  
  .post-item h3 a {
    color: #1a1a1a;
    text-decoration: none;
  }
  
  .post-item h3 a:hover {
    color: #667eea;
  }
  
  .post-excerpt {
    color: #555;
    line-height: 1.6;
  }
  
  .read-more {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
  }
  
  .read-more:hover {
    text-decoration: underline;
  }
  
  .text-center {
    text-align: center;
    margin-top: 40px;
  }
  
  .button {
    display: inline-block;
    padding: 12px 30px;
    background: #667eea;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
  }
  
  .button:hover {
    background: #5568d3;
  }
</style>
