// URL: https://observablehq.com/@chumo/poisson-distribution
// Title: Poisson Distribution
// Author: Jesús Martínez-Blanco (@chumo)
// Version: 289
// Runtime version: 1

const m0 = {
  id: "d017d9a5b9adc387@289",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Poisson Distribution`
)})
    },
    {
      inputs: ["md","tex"],
      value: (function(md,tex){return(
md`The [Poisson distribution](https://en.wikipedia.org/wiki/Poisson_distribution) is a discrete probability distribution that expresses the probability of a given number of events ${tex`k`} occurring in a fixed interval of time or space if these events occur with a known constant rate ${tex`\lambda`} and independently of the time since the last event.`
)})
    },
    {
      inputs: ["md","tex"],
      value: (function(md,tex){return(
md`${tex`P(k \text{ events in interval}) = \frac{\lambda^k}{k!}e^{-\lambda}`}`
)})
    },
    {
      inputs: ["md","tex","lambda","confidentInterval"],
      value: (function(md,tex,lambda,confidentInterval){return(
md`In the plot below, the blue distribution represents the probability of observing ${tex`k`} events per unit time from a phenomenon governed by Poisson in which the expected number of events is ${tex`\lambda`} = ${lambda}. The lower and upper limits (green box) for the ${confidentInterval}% confidence interval are also provided.`
)})
    },
    {
      inputs: ["math","lambda","bounds","DOM","Plotly"],
      value: (function(math,lambda,bounds,DOM,Plotly)
{    
  var k = math.range(1, 50)._data;
  var P = k.map(e => math.exp(-lambda)*lambda**e/math.factorial(e));
  
  var data = [];
  
  data.push(
    {
      type: "line",
      x: bounds,
      y: [0.4, 0.4],
      fill: 'tozeroy',
      fillcolor: 'rgba(0,200,50,0.25)',
      mode: 'none',
    }
  );
  
  data.push(
    {
      type: "bar",
      x: k,
      y: P,
      marker: {color: 'rgba(30,110,170,0.75)'},
    }
  );
  
  var labelLambda = {
      text: '[' + Math.round(bounds[0]) + '... 𝝺=' + lambda + ' ...' + Math.round(bounds[1]) + ']',
      y: 0.33,
      x: 35,
      font: {size:25, family:'courier',},
      showarrow: false,
  };
    
  var layout = {
    margin: {t:50, b:50, l:50, r:50},
    width: 500, 
    height: 500,
    yaxis: {
      range: [0, .4],
      title: 'Probability',
    },
    xaxis: {
      range:[0, 50],
      title: '<b>k</b> (Number of events)',
    },
    annotations: [labelLambda],
    showlegend: false,
  };
  
  const div = DOM.element('div');
  Plotly.newPlot(div, data, layout);
  return div;
}
)
    },
    {
      name: "viewof lambda",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 0, 
  max: 50, 
  step: 1, 
  description: 'Select a value for 𝝺 (expected number of events per unit time)'
})
)})
    },
    {
      name: "lambda",
      inputs: ["Generators","viewof lambda"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof confidentInterval",
      inputs: ["slider"],
      value: (function(slider){return(
slider({
  min: 0, 
  max: 99, 
  step: 1, 
  value: 95,
  description: 'Select a value for the confidence interval (%)'
})
)})
    },
    {
      name: "confidentInterval",
      inputs: ["Generators","viewof confidentInterval"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Helper`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`We compute the approximate lower and upper bounds of the confidence interval using the [Pearson formula](http://ms.mcmaster.ca/peter/s743/poissonalpha.html).`
)})
    },
    {
      name: "qchisq",
      value: (function()
{
  return {
    0: 0.0,
    1: 0.00015708785790970235,
    2: 0.0006284501612836701,
    3: 0.0014143833008117758,
    4: 0.0025153819343540045,
    5: 0.003932140000019531,
    6: 0.005665552140527408,
    7: 0.007716715544951984,
    8: 0.010086932215776018,
    9: 0.012777711671052993,
    10: 0.015790774093431225,
    11: 0.01912805393983142,
    12: 0.02279170402771237,
    13: 0.02678410011612328,
    14: 0.031107846002146392,
    15: 0.035765779155897647,
    16: 0.04076097692000096,
    17: 0.04609676330240776,
    18: 0.051776716394621225,
    19: 0.05780467645084204,
    20: 0.06418475466730152,
    21: 0.07092134270514099,
    22: 0.07801912300465808,
    23: 0.08548307994363452,
    24: 0.09331851189782886,
    25: 0.10153104426762152,
    26: 0.11012664354131377,
    27: 0.11911163247277606,
    28: 0.1284927064591019,
    29: 0.13827695121276062,
    30: 0.14847186183254535,
    31: 0.1590853633885528,
    32: 0.170125833148597,
    33: 0.18160212458709002,
    34: 0.19352359333264613,
    35: 0.2059001252277655,
    36: 0.2187421666931529,
    37: 0.23206075761082928,
    38: 0.24586756696458986,
    39: 0.2601749315038932,
    40: 0.2749958977284559,
    41: 0.29034426752623865,
    42: 0.3062346478377105,
    43: 0.3226825047651631,
    44: 0.339704222598183,
    45: 0.35731716828631976,
    46: 0.3755397619587449,
    47: 0.3943915541697604,
    48: 0.41389331064017637,
    49: 0.43406710536994353,
    50: 0.4549364231195724,
    51: 0.4765262723998086,
    52: 0.49886331027447567,
    53: 0.5219759804748719,
    54: 0.5458946665509177,
    55: 0.5706518620511887,
    56: 0.5962823600390521,
    57: 0.6228234646254156,
    58: 0.6503152276424536,
    59: 0.6788007141124474,
    60: 0.7083263008007934,
    61: 0.7389420129062114,
    62: 0.7707019048646728,
    63: 0.8036644923649123,
    64: 0.8378932440414834,
    65: 0.8734571429892312,
    66: 0.9104313303115313,
    67: 0.9488978454795083,
    68: 0.9889464814780119,
    69: 1.0306757767293035,
    70: 1.074194170857572,
    71: 1.119621357811835,
    72: 1.1670898781388461,
    73: 1.216747002889574,
    74: 1.2687569755772867,
    75: 1.3233036969314478,
    76: 1.3805939615297411,
    77: 1.4408613880531267,
    78: 1.5043712292405182,
    79: 1.5714263085275886,
    80: 1.6423744151497899,
    81: 1.7176176092513715,
    82: 1.7976240603656204,
    83: 1.8829432934305763,
    84: 1.9742260895909074,
    85: 2.0722508558221926,
    86: 2.1779591588540876,
    87: 2.292504526092277,
    88: 2.417320930455628,
    89: 2.554221312496361,
    90: 2.705543454095414,
    91: 2.874373395996008,
    92: 3.0649017200763566,
    93: 3.283020286759539,
    94: 3.537384596462601,
    95: 3.841458820694124,
    96: 4.217884587921395,
    97: 4.709292246885103,
    98: 5.411894431054342,
    99: 6.6348966010212145
   }
}
)
    },
    {
      name: "bounds",
      inputs: ["qchisq","confidentInterval","lambda","math"],
      value: (function(qchisq,confidentInterval,lambda,math)
{
  const a = qchisq[confidentInterval]
  return [
    lambda + a/2 - math.sqrt(a) * math.sqrt(lambda + a/4),
    lambda + a/2 + math.sqrt(a) * math.sqrt(lambda + a/4),
    ]
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Imports`
)})
    },
    {
      from: "@jashkenas/inputs",
      name: "slider",
      remote: "slider"
    },
    {
      name: "Plotly",
      inputs: ["require"],
      value: (function(require){return(
require("https://cdn.plot.ly/plotly-latest.min.js")
)})
    },
    {
      name: "math",
      inputs: ["require"],
      value: (function(require){return(
require("https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.4.2/math.min.js")
)})
    }
  ]
};

const m1 = {
  id: "@jashkenas/inputs",
  variables: [
    {
      name: "slider",
      inputs: ["input"],
      value: (function(input){return(
function slider(config = {}) {
  let {value, min = 0, max = 1, step = "any", precision = 2, title, description, getValue, format, display, submit} = config;
  if (typeof config == "number") value = config;
  if (value == null) value = (max + min) / 2;
  precision = Math.pow(10, precision);
  if (!getValue) getValue = input => Math.round(input.valueAsNumber * precision) / precision;
  return input({
    type: "range", title, description, submit, format, display,
    attributes: {min, max, step, value},
    getValue
  });
}
)})
    },
    {
      name: "input",
      inputs: ["html","d3format"],
      value: (function(html,d3format){return(
function input(config) {
  let {
    form,
    type = "text",
    attributes = {},
    action,
    getValue,
    title,
    description,
    format,
    display,
    submit,
    options
  } = config;
  if (!form)
    form = html`<form>
	<input name=input type=${type} />
  </form>`;
  const input = form.input;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) input.setAttribute(key, val);
  });
  if (submit)
    form.append(
      html`<input name=submit type=submit style="margin: 0 0.75em" value="${
        typeof submit == "string" ? submit : "Submit"
      }" />`
    );
  form.append(
    html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`
  );
  if (title)
    form.prepend(
      html`<div style="font: 700 0.9rem sans-serif;">${title}</div>`
    );
  if (description)
    form.append(
      html`<div style="font-size: 0.85rem; font-style: italic;">${description}</div>`
    );
  if (format) format = d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit
      ? "onsubmit"
      : type == "button"
        ? "onclick"
        : type == "checkbox" || type == "radio"
          ? "onchange"
          : "oninput";
    form[verb] = e => {
      e && e.preventDefault();
      const value = getValue ? getValue(input) : input.value;
      if (form.output)
        form.output.value = display
          ? display(value)
          : format
            ? format(value)
            : value;
      form.value = value;
      if (verb !== "oninput")
        form.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    };
    if (verb !== "oninput")
      input.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = e => e && e.preventDefault();
    form[verb]();
  }
  return form;
}
)})
    },
    {
      name: "d3format",
      inputs: ["require"],
      value: (function(require){return(
require("d3-format@1")
)})
    }
  ]
};

const notebook = {
  id: "d017d9a5b9adc387@289",
  modules: [m0,m1]
};

export default notebook;
