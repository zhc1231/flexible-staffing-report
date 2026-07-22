(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // ==================== Chart 1: Market Overview ====================
  var chart1 = echarts.init(document.getElementById('chart-market-overview'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: { appendToBody: true, trigger: 'axis' },
    legend: {
      data: ['市场规模(万亿元)', '灵活就业人数(亿人)'],
      top: 0,
      textStyle: { color: muted, fontSize: 12 }
    },
    grid: { left: '12%', right: '8%', top: '18%', bottom: '12%' },
    xAxis: {
      type: 'category',
      data: ['2022', '2023', '2024', '2025(估)', '2026(预)'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted }
    },
    yAxis: [
      {
        type: 'value',
        name: '规模(万亿元)',
        nameTextStyle: { color: muted },
        axisLine: { lineStyle: { color: rule } },
        splitLine: { lineStyle: { color: rule } },
        axisLabel: { color: muted }
      },
      {
        type: 'value',
        name: '人数(亿人)',
        nameTextStyle: { color: muted },
        axisLine: { lineStyle: { color: rule } },
        splitLine: { show: false },
        axisLabel: { color: muted }
      }
    ],
    series: [
      {
        name: '市场规模(万亿元)',
        type: 'bar',
        data: [1.02, 1.15, 1.36, 1.76, 2.1],
        itemStyle: { color: accent, borderRadius: [4,4,0,0] },
        barWidth: '35%'
      },
      {
        name: '灵活就业人数(亿人)',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.15, 2.4, 2.8, 3.2],
        lineStyle: { color: accent2, width: 2.5 },
        itemStyle: { color: accent2 },
        symbol: 'circle',
        symbolSize: 7
      }
    ]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // ==================== Chart 2: Channel Radar ====================
  var chart2 = echarts.init(document.getElementById('chart-channel-radar'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: { appendToBody: true },
    legend: {
      data: ['获客成本', '获客速度', '客户质量', '规模潜力'],
      top: 0,
      textStyle: { color: muted, fontSize: 11 }
    },
    radar: {
      indicator: [
        { name: '线上推广', max: 5 },
        { name: '线下地推', max: 5 },
        { name: '行业活动', max: 5 },
        { name: '渠道合作', max: 5 },
        { name: '合伙人体系', max: 5 },
        { name: 'SaaS工具转化', max: 5 }
      ],
      center: ['50%', '55%'],
      radius: '62%',
      axisName: { color: muted, fontSize: 11 },
      splitArea: { areaStyle: { color: ['rgba(13,124,102,0.02)', 'rgba(13,124,102,0.05)'] } },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: [3, 4, 2, 2, 1, 2],
          name: '获客成本(低=好)',
          lineStyle: { color: accent },
          areaStyle: { color: accent + '20' },
          itemStyle: { color: accent }
        },
        {
          value: [4, 3, 2, 3, 5, 3],
          name: '获客速度',
          lineStyle: { color: accent2 },
          areaStyle: { color: accent2 + '20' },
          itemStyle: { color: accent2 }
        },
        {
          value: [3, 4, 5, 4, 3, 5],
          name: '客户质量',
          lineStyle: { color: muted },
          areaStyle: { color: muted + '15' },
          itemStyle: { color: muted }
        },
        {
          value: [4, 3, 2, 4, 5, 3],
          name: '规模潜力',
          lineStyle: { color: ink },
          areaStyle: { color: ink + '10' },
          itemStyle: { color: ink }
        }
      ]
    }]
  });
  window.addEventListener('resize', function() { chart2.resize(); });

  // ==================== Chart 3: Funnel ====================
  var chart3 = echarts.init(document.getElementById('chart-funnel'), null, { renderer: 'svg' });
  chart3.setOption({
    animation: false,
    tooltip: { appendToBody: true, trigger: 'item', formatter: '{b}: {c}' },
    series: [{
      type: 'funnel',
      left: '15%',
      top: '8%',
      bottom: '8%',
      width: '70%',
      sort: 'descending',
      gap: 4,
      label: {
        show: true,
        position: 'inside',
        formatter: '{b}\n{c}',
        fontSize: 12,
        color: '#fff',
        fontWeight: 600
      },
      itemStyle: { borderWidth: 0 },
      data: [
        { value: 100, name: '品牌曝光/线索', itemStyle: { color: accent + 'bb' } },
        { value: 60, name: '意向咨询', itemStyle: { color: accent + 'cc' } },
        { value: 30, name: '方案演示/试用', itemStyle: { color: accent + 'dd' } },
        { value: 15, name: '签约合作', itemStyle: { color: accent } },
        { value: 12, name: '活跃留存', itemStyle: { color: accent2 } }
      ]
    }]
  });
  window.addEventListener('resize', function() { chart3.resize(); });

  // ==================== Chart 4: Roadmap ====================
  var chart4 = echarts.init(document.getElementById('chart-roadmap'), null, { renderer: 'svg' });
  chart4.setOption({
    animation: false,
    tooltip: { appendToBody: true, trigger: 'axis' },
    legend: {
      data: ['客户数量目标', '月度新增'],
      top: 0,
      textStyle: { color: muted, fontSize: 12 }
    },
    grid: { left: '12%', right: '8%', top: '18%', bottom: '12%' },
    xAxis: {
      type: 'category',
      data: ['第1季度', '第2季度', '第3季度', '第4季度', '第5-8季度', '第9-12季度'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted }
    },
    yAxis: {
      type: 'value',
      name: '客户数(家)',
      nameTextStyle: { color: muted },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted }
    },
    series: [
      {
        name: '客户数量目标',
        type: 'line',
        data: [30, 120, 300, 500, 3000, 10000],
        lineStyle: { color: accent, width: 2.5 },
        itemStyle: { color: accent },
        symbol: 'circle',
        symbolSize: 7,
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: accent + '30' }, { offset: 1, color: accent + '05' }] } }
      },
      {
        name: '月度新增',
        type: 'bar',
        data: [30, 30, 60, 67, 83, 175],
        itemStyle: { color: accent2 + '99', borderRadius: [3,3,0,0] },
        barWidth: '30%'
      }
    ]
  });
  window.addEventListener('resize', function() { chart4.resize(); });
})();
