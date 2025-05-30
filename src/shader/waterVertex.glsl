precision highp float;

uniform float uTimeB;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;


//	Simplex 3D Noise
//	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

// Simplex 2D noise
//
vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float getElevation(float x, float y) {
    vec2 pos = vec2(x, y);
    int wavesIterations = 8;//more iterations -> noise gets higher (bigger waves)
    float wavesFrequency = 1.5;// frequency of waves
    float wavesLacunarity = 2.0;
    float amplitude = 0.08;
    float persistance = 0.3;//more frequency noise
    float elevation = 0.0;

    float total = 0.0;
    for (int i = 0; i < wavesIterations; i++) {
        float noiseValue = snoise(wavesFrequency * pos.xy + 0.2 * uTimeB);//  WavesSpeed
        elevation += amplitude * noiseValue;
        amplitude *= persistance;
        wavesFrequency *= wavesLacunarity;
    }
    return elevation;
}

void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = getElevation(modelPosition.xz);
    modelPosition.y += elevation;

    float eps = 0.001;
    vec3 tangent = normalize(vec3(eps, getElevation(modelPosition.x - eps, modelPosition.z) - elevation, 0.0));
    vec3 bitangent = normalize(vec3(0.0, getElevation(modelPosition.x, modelPosition.z - eps) - elevation, eps));
    vNormal = normalize(cross(tangent, bitangent));

    vWorldPosition = modelPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
}