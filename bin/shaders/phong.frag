// classic Phong equation
#version 410

in vec4 vPosition;
in vec4 vNormal;

uniform vec3 lightDirection;
uniform vec3 cameraposition;
uniform vec3 Id;
uniform vec3 Is;
uniform vec3 Ia;
uniform vec3 Ka;
uniform vec3 Kd;
uniform vec3 Ks;
uniform float specularPower;

out vec4 FragmentColor;
void main() 
{
	vec3 Lm = normalize(lightDirection);
	vec3 N = normalize(vNormal.xyz);
	vec3 V = normalize(vPosition.xyz - cameraposition);
	vec3 Rm = (2 * dot(N,Lm) * N - Lm);
	float lambertTerm = dot(N,Lm);
	float specularTerm = pow( max( 0, dot( Rm, V ) ), specularPower );
    //calculate each light property
    //just make some colors then use the up vector for ambient hemisphere
    vec3 red = vec3(250,0,0);
    vec3 green = vec3(0, 250, 0); 
    vec3 blue = vec3(0, 0, 250);
    //more dot product...
    float a = dot(N,vec3(0,1.f,0));
    vec3 hemisphere = .5f * mix(red, blue, a) + .5f;
    
    //the Intensity is too high in program...
    //just scale it here
    vec3 ambient = (Ia * .01f) * (Ka) * hemisphere;
    vec3 diffuse = Id  * Kd  * lambertTerm;
    vec3 specular = Is * Ks * specularTerm ;

	FragmentColor = vec4(ambient + diffuse + specular, 1);

	//need the lambertTerm, and V

}
