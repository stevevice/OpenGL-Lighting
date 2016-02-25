#include "SolarSystemApplication.h"
#include "RenderingGeomApplication.h"
#include "RenderingOBJApplication.h"
#include "TexturingApplication.h"
#include "TexturedOBJApplication.h"
#include "ApplyTextureOBJApplication.h"
#include "ProceduralGenerationApplication.h"
#include "GUIApplication.h"
#include "LightingOBJApplication.h"
#include "LightingSphereApplication.h"
#include "ParticleApplication.h"
#include "TexturedParticleApplication.h"

int main() {
	
	// change startup application
	BaseApplication* app = new TexturedParticleApplication();
	if (app->startup())
		app->run();
	app->shutdown();

	return 0;
}