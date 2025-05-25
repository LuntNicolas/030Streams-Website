precision highp float;

uniform sampler2D uTexture;
uniform float uTimeB;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;

void main() {
    float fresnelPower = 1.0;
    float fresnelStrength = 0.5;
    float opacity = 0.5;

    vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
    vec3 reflected = reflect(viewDirection, vNormal);
    reflected.x *= -1.0;

    vec3 reflectionColor = vec3(1, 0, 1);

    float fresnel = fresnelStrength * pow(1.0 - clamp(dot(viewDirection, vNormal), 0.0, 1.0), fresnelPower);

    vec4 color = texture2D(uTexture, vUv);
    vec3 finalColor = mix(color.rgb, reflectionColor, fresnel);
    gl_FragColor = vec4(finalColor, opacity);
}