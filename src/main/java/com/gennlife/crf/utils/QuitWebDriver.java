package com.gennlife.crf.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

/**
 * @Description: 关闭浏览器
 * @author: wangmiao
 * @Date: 2017年6月9日 下午2:27:20 
 */
public class QuitWebDriver {
	
	/** 
	* @Title: quitWebDriver 
	* @Description: 关闭浏览器(有页面方式)
	* @param: WebDriver driver
	* @return: void
	* @throws 
	*/
	public static void quitWebDriver(WebDriver driver){
		// 关闭浏览器
		driver.close();
		driver.quit();
	}
	
	
	/** 
	* @Title: quitWebDriverByPhantomJSDriver 
	* @Description: : 关闭浏览器(无页面方式)
	* @param: PhantomJSDriver driver
	* @return: void
	* @throws 
	*/
	public static void quitWebDriverByPhantomJSDriver(PhantomJSDriver driver){
		// 关闭浏览器
		driver.close();
		driver.quit();
	}

}
