ebug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setDirty(LaunchConfigurationWorkingCopy.java:538) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setAttribute(LaunchConfigurationWorkingCopy.java:419) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:297) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,192 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Sf_Addsf.sf_AddSf references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Sf_Addsf.sf_AddSf references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setDirty(LaunchConfigurationWorkingCopy.java:538) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setAttribute(LaunchConfigurationWorkingCopy.java:419) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:298) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,194 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Sf_Addsf.sf_AddSf references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Sf_Addsf.sf_AddSf references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager.launchConfigurationChanged(LaunchManager.java:2141) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.writeNewFile(LaunchConfigurationWorkingCopy.java:380) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave0(LaunchConfigurationWorkingCopy.java:246) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave(LaunchConfigurationWorkingCopy.java:216) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave(LaunchConfigurationWorkingCopy.java:170) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:299) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,194 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddCysqk.zy_AddCysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddCysqk.zy_AddCysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setDirty(LaunchConfigurationWorkingCopy.java:538) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setAttribute(LaunchConfigurationWorkingCopy.java:419) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:297) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,195 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddCysqk.zy_AddCysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddCysqk.zy_AddCysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setDirty(LaunchConfigurationWorkingCopy.java:538) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setAttribute(LaunchConfigurationWorkingCopy.java:419) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:298) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,197 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddCysqk.zy_AddCysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddCysqk.zy_AddCysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager.launchConfigurationChanged(LaunchManager.java:2141) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.writeNewFile(LaunchConfigurationWorkingCopy.java:380) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave0(LaunchConfigurationWorkingCopy.java:246) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave(LaunchConfigurationWorkingCopy.java:216) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave(LaunchConfigurationWorkingCopy.java:170) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:299) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,197 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddRysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddRysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setDirty(LaunchConfigurationWorkingCopy.java:538) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setAttribute(LaunchConfigurationWorkingCopy.java:419) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:297) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,197 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddRysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddRysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setDirty(LaunchConfigurationWorkingCopy.java:538) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setAttribute(LaunchConfigurationWorkingCopy.java:419) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:298) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,199 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddRysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddRysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager.launchConfigurationChanged(LaunchManager.java:2141) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.writeNewFile(LaunchConfigurationWorkingCopy.java:380) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave0(LaunchConfigurationWorkingCopy.java:246) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave(LaunchConfigurationWorkingCopy.java:216) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.doSave(LaunchConfigurationWorkingCopy.java:170) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:299) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,200 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddRysqk.zy_AddRysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddRysqk.zy_AddRysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setDirty(LaunchConfigurationWorkingCopy.java:538) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setAttribute(LaunchConfigurationWorkingCopy.java:419) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:297) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,200 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddRysqk.zy_AddRysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddRysqk.zy_AddRysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.notify(LaunchManager.java:209) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setDirty(LaunchConfigurationWorkingCopy.java:538) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.debug.internal.core.LaunchConfigurationWorkingCopy.setAttribute(LaunchConfigurationWorkingCopy.java:419) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:298) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenRuntimeClasspathProvider.disable(MavenRuntimeClasspathProvider.java:323) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.mavenProjectChanged(MavenLaunchConfigurationListener.java:70) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.notifyProjectChangeListeners(ProjectRegistryManager.java:746) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryManager.applyMutableProjectRegistry(ProjectRegistryManager.java:865) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.core.internal.project.registry.ProjectRegistryRefreshJob.run(ProjectRegistryRefreshJob.java:101) [org.eclipse.m2e.core_1.4.1.20140328-1905.jar:na]
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53) [org.eclipse.core.jobs_3.5.300.v20130429-1813.jar:na]
2017-07-13 16:29:43,202 [Worker-75] ERROR o.e.m.j.i.l.MavenLaunchConfigurationListener - Launch configuration TestYantai_Zy_AddRysqk.zy_AddRysqk references non-existing project crf_mysql.
org.eclipse.core.runtime.CoreException: Launch configuration TestYantai_Zy_AddRysqk.zy_AddRysqk references non-existing project crf_mysql.
	at org.eclipse.jdt.launching.JavaRuntime.abort(JavaRuntime.java:1403) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.jdt.launching.JavaRuntime.getJavaProject(JavaRuntime.java:1278) ~[org.eclipse.jdt.launching_3.7.1.v20131218-1102.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.updateLaunchConfiguration(MavenLaunchConfigurationListener.java:53) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.m2e.jdt.internal.launch.MavenLaunchConfigurationListener.launchConfigurationChanged(MavenLaunchConfigurationListener.java:38) [org.eclipse.m2e.jdt_1.4.1.20140328-1905.jar:na]
	at org.eclipse.debug.internal.core.LaunchManager$ConfigurationNotifier.run(LaunchManager.java:228) [org.eclipse.debug.core_3.8.0.v20130514-0954.jar:na]
	at org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42) [org.eclipse.equinox.common_3.6.200.v20130402-1505.